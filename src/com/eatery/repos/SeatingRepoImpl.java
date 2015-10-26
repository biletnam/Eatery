package com.eatery.repos;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eatery.models.Reservation;
import com.eatery.models.Seating;

@Repository
public class SeatingRepoImpl implements SeatingRepo {

	private SessionFactory sessionFactory;
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getCurrentSession(){
		return sessionFactory.getCurrentSession();
	}
	
	@Override
	public int getNextAvailableTable() {
		Session session=getCurrentSession();
		Criteria criteria=session
							.createCriteria(Seating.class)
							.setProjection(Projections.max("seating"));
		Object x=criteria.uniqueResult();
		if(x!=null)
			return (int)x+1;
		else
			return 1;
	}

	@Override
	public int save(Seating seating) {
		Session session=getCurrentSession();
		return (int) session.save(seating);
	}

}
