package com.eatery.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.Type;
import org.joda.time.LocalDateTime;
import com.eatery.customClasses.CustomDateSerializer;
import com.eatery.customClasses.CustomJsonDateDeserializer;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name="reservations")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
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
	@Type(type="org.jadira.usertype.dateandtime.joda.PersistentLocalDateTime")
	private LocalDateTime time;
	private int seats;
	private String note;
	private boolean assigned;
	
	@OneToMany(mappedBy="reservation")
	private Collection<Seating> tables=new ArrayList<Seating>();
	
	public Reservation() { }
	
	public Reservation(String name, String email, String phone,
			LocalDateTime time, int seats, String note,boolean assigned) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.time = time;
		this.seats = seats;
		this.note = note;
		this.assigned=assigned;
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

	@JsonSerialize(using=CustomDateSerializer.class)
	public LocalDateTime getTime() {
		return time;
	}

	@JsonDeserialize(using=CustomJsonDateDeserializer.class)
	public void setTime(LocalDateTime time) {
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

	public boolean isAssigned() {
		return assigned;
	}

	public void setAssigned(boolean assigned) {
		this.assigned = assigned;
	}

	public Collection<Seating> getTables() {
		return tables;
	}

	public void setTables(Collection<Seating> tables) {
		this.tables = tables;
	}
	
	
}
