package com.eatery.services;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eatery.models.Reservation;
import com.eatery.models.Seating;
import com.eatery.repos.ReservationRepo;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {

	private ReservationRepo reservationRepo;
	private SeatingService seatingService;
	
	@Autowired
	public void setReservationRepo(ReservationRepo reservationRepo) {
		this.reservationRepo = reservationRepo;
	}
	
	@Autowired
	public void setSeatingService(SeatingService seatingService) {
		this.seatingService = seatingService;
	}


	@Override
	public Reservation save(Reservation reservation) {
		int availableTable=seatingService.getNextAvailableTable(reservation.getTime());
		if(availableTable!=0){
			Seating seating=new Seating(availableTable,reservation);
			reservation.setAssigned(true);
			Collection<Seating> tables=new ArrayList<Seating>();
			tables.add(seating);
			reservation.setTables(tables);
			seatingService.save(seating);
		}
		else {
			reservation.setAssigned(false);
		}
		
		Reservation savedReservation=reservationRepo.save(reservation);				
		return savedReservation;
	}

}
