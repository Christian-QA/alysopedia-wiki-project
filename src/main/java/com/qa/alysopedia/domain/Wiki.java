package com.qa.alysopedia.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;


@Data
@Document(collection = "wiki")
public class Wiki {
	
	@Id
	@Field("_id")
	@JsonIgnore
	private String id;
	private String title;
	private String category;
	private String author;
	private String body;
			
}
