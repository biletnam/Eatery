package com.eatery.repos;

import com.eatery.models.Seating;

public interface SeatingRepo {

	public int getNextAvailableTable();
	public int save(Seating seating);
}
