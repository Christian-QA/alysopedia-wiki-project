package com.qa.alysopedia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.qa.alysopedia.dto.UserDTO;
import com.qa.alysopedia.service.UserService;

@Controller
public class UserController {

	private final UserService service;

	@Autowired
	public UserController(UserService service) {

		this.service = service;

	}

	@GetMapping("/getAllUser")
	public ResponseEntity<List<UserDTO>> getAllUser() {
		return ResponseEntity.ok(this.service.readUser());
	}

	@PostMapping("/createUser")
	public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO user) {
		return new ResponseEntity<>(this.service.createUser(user), HttpStatus.CREATED);
	}

}
