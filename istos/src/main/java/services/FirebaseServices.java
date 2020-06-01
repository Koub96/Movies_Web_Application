package services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

import model.Movie;

public class FirebaseServices {
	public static String saveData(Movie m,String id) throws InterruptedException, ExecutionException, IOException {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("Movies").document(id).set(m);
		return collectionsApiFuture.get().getUpdateTime().toString();
		
	}
	
	public static Movie getData(String id) throws InterruptedException, ExecutionException {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		DocumentReference documentReference = dbFirestore.collection("Movies").document(id);
		ApiFuture<DocumentSnapshot> future = documentReference.get();
		
		DocumentSnapshot document = future.get();
		Movie m = null;
		if(document.exists()) {
			m = document.toObject(Movie.class);
			return m;
		}else {
			return null;
		}
	}
	
	public static List<Movie> getAllData() throws InterruptedException, ExecutionException {
		List<Movie> movieList = new ArrayList<Movie>();
		Firestore dbFirestore = FirestoreClient.getFirestore();
		//asynchronously retrieve all documents
		ApiFuture<QuerySnapshot> future = dbFirestore.collection("Movies").get();
		// future.get() blocks on response
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		for (QueryDocumentSnapshot document : documents) {
			//System.out.println(document.getId());
		   movieList.add(document.toObject(Movie.class));
		}
		return movieList;
	}
	
	public static int getMaxID() throws InterruptedException, ExecutionException {
		int max = -1;
		Firestore dbFirestore = FirestoreClient.getFirestore();
		//asynchronously retrieve all documents
		ApiFuture<QuerySnapshot> future = dbFirestore.collection("Movies").get();
		// future.get() blocks on response
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		for (QueryDocumentSnapshot document : documents) {
			//System.out.println(document.getId());
			if(Integer.parseInt(document.getId()) > max) {
				max = Integer.parseInt(document.getId());
			}
		}
		return max;
	}
	
	public static boolean deleteMovie(String title) throws InterruptedException, ExecutionException {
		Firestore dbFirestore = FirestoreClient.getFirestore();
		//asynchronously retrieve all documents
		ApiFuture<QuerySnapshot> future = dbFirestore.collection("Movies").get();
		// future.get() blocks on response
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		for (QueryDocumentSnapshot document : documents) {
			//System.out.println(document.getId());
		    //System.out.println(document.toObject(Movie.class).getName());
			if(document.toObject(Movie.class).getName().equals(title)) {
				ApiFuture<WriteResult> writeResult = dbFirestore.collection("Movies").document(document.getId()).delete();
				return true;
			}
		}
		return false;
	}

}

