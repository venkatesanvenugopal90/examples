package com.mycompany.portal.backend.service;

import java.io.Serializable;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.mycompany.portal.backend.exception.ResourceAlreadyExistException;
import com.mycompany.portal.backend.exception.ResourceAlreadyInUseException;
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
	public Person addOrUpdate(Person person) throws ResourceAlreadyExistException {
		Address address = person.getAddress();
		if (address != null) {
			Address dbAddress = addressRepository.findById(address.getId()).get();
			person.setAddress(dbAddress);
		}
		try {
			return personRepository.save(person);
		} catch (DataIntegrityViolationException exception) {
			throw new ResourceAlreadyExistException(person + " already exist.", exception);
		}
	}

	@Override
	public List<Person> list() {
		return personRepository.findAll();
	}

	@Override
	public void delete(Serializable id) throws ResourceAlreadyInUseException {
		try {
			personRepository.deleteById((Long) id);
		} catch (DataIntegrityViolationException exception) {
			throw new ResourceAlreadyInUseException("Already in use. Can not be deleted.", exception);
		}
	}

	@Override
	public Long count() {
		return personRepository.count();
	}
}