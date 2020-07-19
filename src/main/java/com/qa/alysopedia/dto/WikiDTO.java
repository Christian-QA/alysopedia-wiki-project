package com.qa.alysopedia.dto;

import org.springframework.data.annotation.Id;
import org.springframework.transaction.annotation.Transactional;

import lombok.Data;

@Data
@Transactional
public class WikiDTO {

	@Id
	private Long id;
	private String title;
	private String category;
	
}
