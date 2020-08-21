package com.qa.alysopedia.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.qa.alysopedia.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
	Optional<User> findByUserName(String username);
}
