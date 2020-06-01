package services;


import java.io.IOException;
import java.io.InputStream;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;

@Service
public class FirebaseInitializer {
	@PostConstruct
	public void FirebaseInit() throws IOException {
		
		//FileInputStream serviceAccount =
				  //new FileInputStream("C:\\Users\\Konstantinos\\eclipse-workspace\\istos2\\src\\main\\java\\services\\istos-3d24b-firebase-adminsdk-9pnyw-1b0aed2494.json");
		
		String path = "istos-3d24b-firebase-adminsdk-9pnyw-1b0aed2494.json";
		InputStream serviceAccount = this.getClass().getResourceAsStream(path);
				FirebaseOptions options = new FirebaseOptions.Builder()
				  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
				  .setDatabaseUrl("https://projectistos.firebaseio.com")
				  .build();
				  

				FirebaseApp.initializeApp(options);
				FirebaseAuth.getInstance();
				
	}
	
}
