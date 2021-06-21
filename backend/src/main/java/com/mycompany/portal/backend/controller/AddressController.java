package com.mycompany.portal.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.mycompany.portal.backend.service.CRUDService;
import com.mycompany.portal.backend.exception.ResourceAlreadyExistException;
import com.mycompany.portal.backend.exception.ResourceAlreadyInUseException;
import com.mycompany.portal.backend.model.Address;

@Controller
@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "http://localhost:4200")
public class AddressController {

	@Autowired
	CRUDService<Address> addressService;

	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	public List<Address> addOrUpdate(@RequestBody Address address) {
		try {
			addressService.addOrUpdate(address);
		} catch (ResourceAlreadyExistException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
		}
		return addressService.list();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public List<Address> delete(@PathVariable Long id) {
		try {
			addressService.delete(id);
		} catch (ResourceAlreadyInUseException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
		}
		return addressService.list();
	}

	@RequestMapping(value = "list", method = RequestMethod.GET, produces = "application/json")
	public List<Address> list() {
		return addressService.list();
	}

	@RequestMapping(value = "count", method = RequestMethod.GET, produces = "application/json")
	public Long count() {
		return addressService.count();
	}
}