package com.ws.repos;

import com.ws.web.models.Reservation;

public interface ReservationRepo{
	public int save(Reservation reservation);
	public Reservation findByCnf(String cnf);
	public Reservation findByPhone(String phone);
	public Reservation findByEmail(String email);
}
