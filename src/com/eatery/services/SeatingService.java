package com.eatery.services;

import com.eatery.models.Seating;

public interface SeatingService {

	public int getNextAvailableTable();
	public int save(Seating seating);
}
