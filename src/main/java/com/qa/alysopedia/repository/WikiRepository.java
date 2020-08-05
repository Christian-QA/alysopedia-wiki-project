package com.qa.alysopedia.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.qa.alysopedia.domain.Wiki;

@Repository
public interface WikiRepository extends MongoRepository<Wiki, Long> {
	public List<Wiki> findWikiByTitle(String title);
	public List<Wiki> findWikiByCategory(String category);
}
