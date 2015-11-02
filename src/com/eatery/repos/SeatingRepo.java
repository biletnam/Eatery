package com.eatery.repos;

import org.joda.time.LocalDateTime;

import com.eatery.models.Seating;

public interface SeatingRepo {

	public int getNextAvailableTable(LocalDateTime time);
	public int save(Seating seating);
}
