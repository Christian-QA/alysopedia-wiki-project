package com.qa.alysopedia.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.MongoClient;

@Configuration
@EnableMongoRepositories(basePackages = "com.qa.alysopedia.repository")
public class SimpleMongoConfiguration {

    @Bean
	public MongoClient mongo() {
	    return new MongoClient("localhost");
	}
	
	@Bean
	public MongoTemplate mongoTemplate() throws Exception {
	    return new MongoTemplate(mongo(), "test");
	}
}
