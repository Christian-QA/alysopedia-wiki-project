package com.qa.alysopedia.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "wiki")
public class Wiki {

	@Id
	private int id;
	private String title;
	private String category;
			
}
