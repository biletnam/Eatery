package com.ws.web.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import customClasses.CustomJsonDateDeserializer;

import java.util.Date;

@Entity
@Table(name="reservations")
public class Reservation implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2657656545798031761L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String email;
	private String phone;
	
	@JsonDeserialize(using=CustomJsonDateDeserializer.class)
	private Date time;
	private int seats;
	private String note;
	
	public Reservation() { }
	
	public Reservation(String name, String email, String phone,
			Date time, int seats, String note) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.time = time;
		this.seats = seats;
		this.note = note;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	
	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
}
