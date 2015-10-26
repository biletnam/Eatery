package com.eatery.repos;

import com.eatery.models.Reservation;

public interface ReservationRepo{
	public Reservation save(Reservation reservation);
	public Reservation getReservation(int id);
	public Reservation findByCnf(String cnf);
	public Reservation findByPhone(String phone);
	public Reservation findByEmail(String email);
}
