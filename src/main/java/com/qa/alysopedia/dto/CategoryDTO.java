package com.qa.alysopedia.dto;

import org.springframework.transaction.annotation.Transactional;

import lombok.Data;

@Data
@Transactional
public class CategoryDTO {

	private String category;
	private String subcategory;
	
}
