package com.eatery.models;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

public class TestModels {

	public static void main(String[] args) {
		
		System.out.println("run");
		Reservation reservation=new Reservation("lokesh cherukuri","lc4377@rit.edu","4324134679",null,2,"birthday party",true);
		Seating seating=new Seating(1,reservation);
		Configuration configuration = new Configuration().configure();
	    StandardServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
	    SessionFactory sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		session.save(reservation);
		session.save(seating);
		session.getTransaction().commit();
		session.close();
		
	}

}
