package com.casestudy.traindetails;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.casestudy.traindetails.model.TrainDetailsModel;
import com.casestudy.traindetails.repo.TrainDetailsRepo;
import com.casestudy.traindetails.service.TrainDetailsService;

@SpringBootTest
class TrainDetailsApplicationTests {

	@Autowired
	private TrainDetailsService trainDetailsService;

	@MockBean
	private TrainDetailsRepo trainDetailsRepo;

	@Test
	public void getAllTrainTest()
	{
	when(trainDetailsRepo.findAll()).thenReturn(Stream.of
	(new TrainDetailsModel(23412,"SATABDI","HWH","NJP",21 ,10, 9, "13/12/2021", 40, 2000),new TrainDetailsModel(23412,"SATABDI","HWH","NJP",21 ,10, 9, "13/12/2021", 40, 2000))
	.collect(Collectors.toList()));
	assertEquals(2,trainDetailsService.findAll().size());
	}
}
