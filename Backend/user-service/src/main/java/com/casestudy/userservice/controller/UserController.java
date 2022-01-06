package com.casestudy.userservice.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.userservice.model.IdGenerator;
import com.casestudy.userservice.model.User;
import com.casestudy.userservice.repository.IdRepository;
import com.casestudy.userservice.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	IdRepository idRepo;
	
	@PostMapping("/post")
	public void addUser(@RequestBody User user) {
		IdGenerator idGen= idRepo.findById("userId").get();
		user.setId(idGen.getSeq());
		idGen.setSeq(idGen.getSeq()+1);
		idRepo.save(idGen);
		user.setRole("Customer");
		userRepo.save(user);
	}
	
	@GetMapping("/showalluser")
	public List<User> getAllUsers(){
		List<User> users= new ArrayList<>();
		userRepo.findAll().forEach(users::add);
		return users;
	}
	
	@GetMapping("/showuser/{id}")
	public User getUser(@PathVariable("id") int id) {
		return userRepo.findById(id).get();
	}
	
	@PutMapping("/updateuser")
	public void updateUser(@RequestBody User user) {
		userRepo.save(user);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public void deleteUser(@PathVariable("id") int id) {
		userRepo.deleteById(id);
	}
	
}
