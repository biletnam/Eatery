package com.eatery.repos;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.joda.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.eatery.models.Seating;

@Repository
public class SeatingRepoImpl implements SeatingRepo {

	private int MAX_SEATS=3;
	private SessionFactory sessionFactory;
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getCurrentSession(){
		return sessionFactory.getCurrentSession();
	}
	
	@Override
	public int getNextAvailableTable(LocalDateTime time) {
		Session session=getCurrentSession();
		Criteria criteria=session
							.createCriteria(Seating.class)
							.setProjection(Projections.max("seating"));
		Object x=criteria.uniqueResult();
		if(x!=null){
			if((int)x<MAX_SEATS)
				return (int)x+1;
			else{
				LocalDateTime start=time.minusMinutes(30);
				LocalDateTime end=time.plusMinutes(30);
				Criterion exp_start =Restrictions.between("time", start, end);
				Criteria criteria2=session.createCriteria(Seating.class);
				criteria.add(exp_start);
				Seating seating=(Seating) criteria2.list().get(0);
				return seating.getSeating();
			}
		}
		else
			return 1;
	}

	@Override
	public int save(Seating seating) {
		Session session=getCurrentSession();
		return (int) session.save(seating);
	}

}
