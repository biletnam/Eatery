package com.eatery.services;

import org.joda.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eatery.models.Seating;
import com.eatery.repos.SeatingRepo;

@Service
public class SeatingServiceImpl implements SeatingService {

	private SeatingRepo seatingRepo;
	
	@Autowired
	public void setSeatingRepo(SeatingRepo seatingRepo) {
		this.seatingRepo = seatingRepo;
	}

	@Override
	public int getNextAvailableTable(LocalDateTime time) {
		return seatingRepo.getNextAvailableTable(time);
	}

	@Override
	public int save(Seating seating) {
		return seatingRepo.save(seating);
	}

}
