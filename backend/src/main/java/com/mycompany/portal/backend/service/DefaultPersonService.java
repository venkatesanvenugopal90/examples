package com.mycompany.portal.backend.service;

import java.io.Serializable;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.portal.backend.model.Address;
import com.mycompany.portal.backend.model.Person;
import com.mycompany.portal.backend.repository.AddressRepository;
import com.mycompany.portal.backend.repository.PersonRepository;

@Service
public class DefaultPersonService implements CRUDService<Person> {

	@Autowired
	private PersonRepository personRepository;

	@Autowired
	private AddressRepository addressRepository;

	@Override
	public Person addOrUpdate(Person person) {
		Address address = person.getAddress();
		if (address != null) {
			Address dbAddress = addressRepository.findById(address.getId()).get();
			person.setAddress(dbAddress);
		}
		return personRepository.save(person);
	}

	@Override
	public List<Person> list() {
		return personRepository.findAll();
	}

	@Override
	public void delete(Serializable id) {
		personRepository.deleteById((Long) id);
	}

	@Override
	public Long count() {
		return personRepository.count();
	}
}