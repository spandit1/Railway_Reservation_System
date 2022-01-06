package com.casestudy.traindetails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


import com.casestudy.traindetails.service.TrainDetailsServiceImpl;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableEurekaClient
@EnableMongoRepositories
@SpringBootApplication
@EnableSwagger2
public class TrainDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainDetailsApplication.class, args);
	}
	


	

}
