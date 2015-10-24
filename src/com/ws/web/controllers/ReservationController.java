package com.ws.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ws.repos.ReservationRepo;
import com.ws.web.models.Reservation;

@Controller
public class ReservationController {
	
	private ReservationRepo reservationRepo;
	
	@Autowired
	public void setReservationRepo(ReservationRepo reservationRepo) {
		this.reservationRepo = reservationRepo;
	}

	@RequestMapping(value="/save",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int save(@RequestBody Reservation reservation) {
		return reservationRepo.save(reservation);	
	}
}
