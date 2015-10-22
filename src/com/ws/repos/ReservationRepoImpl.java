package com.ws.repos;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ws.web.models.Reservation;

@Repository
@Transactional
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
	public int save(Reservation reservation){
		Session session=getCurrentSession();
		return (int) session.save(reservation);
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
