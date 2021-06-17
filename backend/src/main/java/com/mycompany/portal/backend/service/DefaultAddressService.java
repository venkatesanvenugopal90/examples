package com.mycompany.portal.backend.service;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mycompany.portal.backend.model.Address;
import com.mycompany.portal.backend.repository.AddressRepository;

@Service
public class DefaultAddressService implements CRUDService<Address> {

	@Autowired
	private AddressRepository addressRepository;

	@Override
	public Address addOrUpdate(Address address) {
		return addressRepository.save(address);
	}

	@Override
	public List<Address> list() {
		return addressRepository.findAll();
	}

	@Override
	public void delete(Serializable id) {
		addressRepository.deleteById((Long) id);
	}

	@Override
	public Long count() {
		return addressRepository.count();
	}
}