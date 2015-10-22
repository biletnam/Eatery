package com.ws.web.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.Type;
import org.joda.time.LocalDateTime;

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
	private String cnf;
	private String name;
	private String email;
	private String phone;
	
	@Type(type="org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime")
	private LocalDateTime t;
	private int seats;
	private String note;
	
	public Reservation() { }
	
	public Reservation(String cnf, String name, String email, String phone,
			LocalDateTime time, int seats, String note) {
		this.cnf = cnf;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.t = time;
		this.seats = seats;
		this.note = note;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCnf() {
		return cnf;
	}

	public void setCnf(String cnf) {
		this.cnf = cnf;
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

	public LocalDateTime getTime() {
		return t;
	}

	public void setTime(LocalDateTime time) {
		this.t = time;
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
