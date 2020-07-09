package com.qa.alysopedia.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface WikiRepository extends MongoRepository<Wiki, String> {
}
