package com.eatery.services;

import org.joda.time.LocalDateTime;

import com.eatery.models.Seating;

public interface SeatingService {

	public int getNextAvailableTable(LocalDateTime time);
	public int save(Seating seating);
}
