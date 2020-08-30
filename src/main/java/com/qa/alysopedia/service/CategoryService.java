package com.qa.alysopedia.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.alysopedia.domain.Category;
import com.qa.alysopedia.domain.Wiki;
import com.qa.alysopedia.dto.CategoryDTO;
import com.qa.alysopedia.dto.WikiDTO;
import com.qa.alysopedia.exception.WikiNotFoundException;
import com.qa.alysopedia.repository.CategoryRepository;
import com.qa.alysopedia.repository.WikiRepository;

@Service
public class CategoryService {

	private final CategoryRepository categoryRepository;
	
	private final ModelMapper mapper;
	
	@Autowired
	public CategoryService(CategoryRepository categoryRepository, ModelMapper mapper) {
		this.categoryRepository = categoryRepository;
		this.mapper = mapper;
	}
	
	private CategoryDTO mapToDTO(Category category) {
		return this.mapper.map(category, CategoryDTO.class);
	}
	
	public CategoryDTO createCategory(Category category) {
		return this.mapToDTO(this.categoryRepository.save(category));
	}
	
	public List<CategoryDTO> readCategory() {
		return this.categoryRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
	}
	
    public List<CategoryDTO> findCategoryByCategory(String category) {
        return this.categoryRepository.findWikiByCategory(category).stream().map(this::mapToDTO).collect(Collectors.toList());
    }
    
}
