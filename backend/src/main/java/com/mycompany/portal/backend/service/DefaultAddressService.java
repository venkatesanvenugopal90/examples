package com.mycompany.portal.backend.service;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.mycompany.portal.backend.exception.ResourceAlreadyExistException;
import com.mycompany.portal.backend.exception.ResourceAlreadyInUseException;
import com.mycompany.portal.backend.model.Address;
import com.mycompany.portal.backend.repository.AddressRepository;

@Service
public class DefaultAddressService implements CRUDService<Address> {

	@Autowired
	private AddressRepository addressRepository;

	@Override
	public Address addOrUpdate(Address address) throws ResourceAlreadyExistException {
		try {
			return addressRepository.save(address);
		} catch (DataIntegrityViolationException exception) {
			throw new ResourceAlreadyExistException(address + " already exist.", exception);
		}
	}

	@Override
	public List<Address> list() {
		return addressRepository.findAll();
	}

	@Override
	public void delete(Serializable id) throws ResourceAlreadyInUseException {
		try {
			addressRepository.deleteById((Long) id);
		} catch (DataIntegrityViolationException exception) {
			throw new ResourceAlreadyInUseException("Already in use. Can not be deleted.", exception);
		}
	}

	@Override
	public Long count() {
		return addressRepository.count();
	}
}