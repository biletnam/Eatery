package com.eatery.repos;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.eatery.models.Reservation;

@Repository
public class ReservationRepoImpl implements ReservationRepo {

	private SessionFactory sessionFactory;
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getCurrentSession(){
		return sessionFactory.getCurrentSession();
	}
	
	@Override
	public Reservation save(Reservation reservation){
		Session session=getCurrentSession();
		int id=(int) session.save(reservation);
		return getReservation(id);
	}	

	@Override
	public Reservation getReservation(int id) {
		Session session=getCurrentSession();
		return (Reservation) session.get(Reservation.class, id);
	}
	
	@Override
	public Reservation findByCnf(String cnf) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reservation findByPhone(String phone) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reservation findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

}
