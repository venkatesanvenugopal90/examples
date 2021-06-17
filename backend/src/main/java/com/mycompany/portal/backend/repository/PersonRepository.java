package com.mycompany.portal.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mycompany.portal.backend.model.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}
