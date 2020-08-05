package com.qa.alysopedia.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Transactional
public class WikiDTO {
	
	@Id
	@Field("_id")
	@JsonIgnore
	private String id;
	private String title;
	private String category;
	private String author;
	private String body;
	
}
