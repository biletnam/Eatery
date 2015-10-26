package com.eatery.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eatery.models.Reservation;
import com.eatery.models.Seating;
import com.eatery.repos.SeatingRepo;

@Service
public class SeatingServiceImpl implements SeatingService {

	private int MAX_SEATS=10;
	private SeatingRepo seatingRepo;
	
	@Autowired
	public void setSeatingRepo(SeatingRepo seatingRepo) {
		this.seatingRepo = seatingRepo;
	}

	@Override
	public int getNextAvailableTable() {
		return seatingRepo.getNextAvailableTable();
	}

	@Override
	public int save(Seating seating) {
		return seatingRepo.save(seating);
	}

}
