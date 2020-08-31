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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.alysopedia.domain.Category;
import com.qa.alysopedia.domain.Wiki;
import com.qa.alysopedia.dto.CategoryDTO;
import com.qa.alysopedia.dto.WikiDTO;
import com.qa.alysopedia.service.CategoryService;
import com.qa.alysopedia.service.WikiService;

@RestController
public class CategoryController {

	private final CategoryService service;
	
	@Autowired
	public CategoryController(CategoryService service) {
		this.service = service;
	}
	
	@PostMapping("/addCategory")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<CategoryDTO> createWiki(@RequestBody Category category) {
		return new ResponseEntity<>(this.service.createCategory(category),HttpStatus.CREATED);
	}
	
	@GetMapping("/findAllCategory")
    @CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<List<CategoryDTO>> getAllCategory() {
		return ResponseEntity.ok(this.service.readCategory());
	}
	
    @GetMapping("/readCategoryByCategory/{category}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<CategoryDTO>> findCategoryByCategory(@PathVariable String category){
        return ResponseEntity.ok(this.service.findCategoryByCategory (category));
    }	
}
