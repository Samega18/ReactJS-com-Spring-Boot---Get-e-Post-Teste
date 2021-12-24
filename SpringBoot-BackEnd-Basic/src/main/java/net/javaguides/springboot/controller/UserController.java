package net.javaguides.springboot.controller;

import java.rmi.ServerException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("users")
	public List<User> getUsers(){
		return this.userRepository.findAll();
	}
	
	@PostMapping("set-users")
	public ResponseEntity<User> setUsers(@RequestBody User user){
		User newUser = userRepository.save(user);
	    if (newUser == null) {
	        return null;
	    } else {
	        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	    }
	}
}
