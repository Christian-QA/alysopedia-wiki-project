package com.qa.alysopedia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.alysopedia.domain.Wiki;
import com.qa.alysopedia.dto.WikiDTO;
import com.qa.alysopedia.service.WikiService;

@RestController
public class WikiController {
	
	private final WikiService service;
	
	@Autowired
	public WikiController(WikiService service) {
		this.service = service;
	}
	
	@PostMapping("/addWiki")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<WikiDTO> createWiki(@RequestBody Wiki wiki) {
		return new ResponseEntity<>(this.service.createWiki(wiki),HttpStatus.CREATED);
	}
	
	@GetMapping("/findAllWiki")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<List<WikiDTO>> getAllWiki() {
		return ResponseEntity.ok(this.service.readWiki());
	}
	
	@GetMapping("/readWikiById/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<WikiDTO> getWikiById(@PathVariable Long id) {
		return ResponseEntity.ok(this.service.findWikiById(id));
	}

    @GetMapping("/readWikiByName/{title}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<WikiDTO>> findWikiByName(@PathVariable String title){
        return ResponseEntity.ok(this.service.findWikiByTitle (title));
    }

    @GetMapping("/readWikiByCategory/{category}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<WikiDTO>> findWikiByCategory(@PathVariable String category){
        return ResponseEntity.ok(this.service.findWikiByCategory (category));
    }
	
	@PutMapping("/updateWiki/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<WikiDTO> updateWiki(@PathVariable Long id, @RequestBody Wiki wiki) {
		return ResponseEntity.ok(this.service.updateWiki(id, wiki));
	}
	
	@DeleteMapping("/deleteWiki/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<?> deleteCharacter(@PathVariable Long id) {
		return this.service.deleteWiki(id)
			? ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
			: ResponseEntity.noContent().build();
	}
}