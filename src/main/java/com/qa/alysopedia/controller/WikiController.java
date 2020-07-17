package com.qa.alysopedia.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.alysopedia.model.Wiki;
import com.qa.alysopedia.repository.WikiRepository;

@RestController
public class WikiController {
	
	@Autowired
	private WikiRepository repository;
	
	@PostMapping("/addWiki")
	public String saveWiki(@RequestBody Wiki wiki) {
		repository.save(wiki);
		return "Wiki page added with the name: " + wiki.getTitle() + ",\n with the id " + wiki.getId();
	}
	
	@GetMapping("/findAllWiki")
	public List<Wiki> getWikis() {
		return repository.findAll();
	}

	@GetMapping("/findAllWiki/{id}")
	public Optional<Wiki> getWiki(@PathVariable int id) {
		return repository.findById(id);
	}
	
	@DeleteMapping("/deleteWiki/{id}")
	public String deleteWiki(@PathVariable int id) {
		repository.deleteById(id);
		return "Wiki page deleted with the name: " + id;
	}
}