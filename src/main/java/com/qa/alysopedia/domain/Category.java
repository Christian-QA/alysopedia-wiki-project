package com.qa.alysopedia.domain;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "category")
public class Category {

	private String category;
	private String subcategory;
	
}

