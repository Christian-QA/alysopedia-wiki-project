package com.qa.alysopedia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.qa.alysopedia"})
public class Alysopedia {
	public static void main(String[] args) {
		SpringApplication.run(Alysopedia.class, args);
	}
}
