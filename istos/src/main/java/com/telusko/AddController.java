package com.telusko;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import services.FirebaseServices;
import model.Movie;


@Controller
public class AddController {
	@RequestMapping("/bookmarks")
	public ModelAndView fetchData() throws InterruptedException, ExecutionException, IOException {
		ModelAndView mv = new ModelAndView(); //we pass values to jsp files via the ModelAndView Object.
		mv.setViewName("bookmarks.jsp"); //the name of the page that we want to get updated.
		//Movie m = FirebaseServices.getData(String.valueOf(4)); //get the movie with id 4.
		//mv.addObject("movie",m.getName()); //we send the data with the key 'Movies'.
		List<Movie> moviesList = new ArrayList<Movie>();

		moviesList = FirebaseServices.getAllData();
		Map<String,Object> allMoviesMap = new HashMap<String,Object>();
	    allMoviesMap.put("allMoviesObjects", moviesList);
	    
	    mv.addAllObjects(allMoviesMap);
		
		return mv;
		
	}
	
	@RequestMapping("/savedata")
	public ModelAndView saveData(HttpServletRequest request,HttpServletResponse response) throws InterruptedException, ExecutionException, IOException {
		String title = request.getParameter("movieTitle");
		if(title.trim().equals("")) {
			ModelAndView mv = new ModelAndView(); //we pass values to jsp files via the ModelAndView Object.
			mv.setViewName("index.jsp"); //the name of the page that we want to get updated.
			mv.addObject("feedback","No movie was selected to be saved!");
			return mv;
		}
		int next_id = FirebaseServices.getMaxID() + 1;
		Movie m = new Movie(title);
		FirebaseServices.saveData(m,String.valueOf(next_id)); //id is the id number of that movie to be saved.
		ModelAndView mv = new ModelAndView(); //we pass values to jsp files via the ModelAndView Object.
		mv.setViewName("index.jsp"); //the name of the page that we want to get updated.
		mv.addObject("feedback","Movie Successfully saved!");
		return mv;
	}
	
	
	@RequestMapping("/removal")
	public ModelAndView deleteData(HttpServletRequest request,HttpServletResponse response) throws InterruptedException, ExecutionException {
		String title = request.getParameter("movieTitle");
		title = title.trim();
		ModelAndView mv = new ModelAndView(); //we pass values to jsp files via the ModelAndView Object.
		mv.setViewName("bookmarks.jsp"); //the name of the page that we want to get updated.
		if(title.equals("")) {
			mv.addObject("feedback","No valid movie was selected to be deleted!");
			mv = FetchAndMapData(mv);
			return mv;
			
		}
		if(FirebaseServices.deleteMovie(title)) {
			mv.addObject("feedback","Movie was deleted!");
			mv = FetchAndMapData(mv);
			return mv;
			
		}else {
			mv.addObject("feedback","No valid movie was selected to be deleted!");
			mv = FetchAndMapData(mv);
			return mv;

		}
	}
	
	private ModelAndView FetchAndMapData(ModelAndView mv) throws InterruptedException, ExecutionException {
		List<Movie> moviesList = new ArrayList<Movie>();

		moviesList = FirebaseServices.getAllData();
		Map<String,Object> allMoviesMap = new HashMap<String,Object>();
	    allMoviesMap.put("allMoviesObjects", moviesList);
	    
	    mv.addAllObjects(allMoviesMap);
	    
	    return mv;
	}

}
