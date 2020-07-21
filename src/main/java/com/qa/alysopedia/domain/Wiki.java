package com.qa.alysopedia.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "wiki")
public class Wiki {

	private String title;
	private String category;
	private String author;
	private String body;
			
}
