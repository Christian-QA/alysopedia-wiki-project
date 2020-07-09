package com.qa.alysopedia.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.MongoTransactionManager;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.MongoClient;

import org.springframework.context.annotation.Configuration;

@Configuration
@EnableMongoRepositories(basePackages = "com.qa.alysopedia.repository")
public class MongoConfiguration extends AbstractMongoConfiguration {

	
	
    @Override
	protected String getDatabaseName() {
	    return "test";
	}
	
	@Override
	public MongoClient mongoClient() {
	    return new MongoClient("127.0.0.1", 27017);
	}
	
	@Override
	protected String getMappingBasePackage() {
	    return "com.qa.alysopedia";
	}
}
