package com.eatery.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="seating")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "seating")
public class Seating implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private int seating;
	@ManyToOne
	private Reservation reservation;
	
	public Seating() { }

	public Seating(int seating, Reservation reservation) {
		this.seating = seating;
		this.reservation = reservation;
	}

	public int getSeating() {
		return seating;
	}

	public void setSeating(int seating) {
		this.seating = seating;
	}

	public Reservation getReservation() {
		return reservation;
	}

	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}	
	
}
