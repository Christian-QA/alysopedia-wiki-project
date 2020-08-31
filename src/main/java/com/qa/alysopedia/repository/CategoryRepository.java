package com.qa.alysopedia.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.qa.alysopedia.domain.Category;

@Repository
public interface CategoryRepository extends MongoRepository<Category, Long> {
	public List<Category> findWikiByCategory(String category);
}
