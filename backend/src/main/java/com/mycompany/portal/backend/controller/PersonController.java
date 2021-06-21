package com.mycompany.portal.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.mycompany.portal.backend.model.Person;

@Controller
@RestController
@RequestMapping("/person")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {

	@Autowired
	CRUDService<Person> personService;

	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	public List<Person> addOrUpdatePerson(@RequestBody Person person) {
		try {
			personService.addOrUpdate(person);
		} catch (ResourceAlreadyExistException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
		}
		return personService.list();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public List<Person> deletePerson(@PathVariable Long id) {
		try {
			personService.delete(id);
		} catch (ResourceAlreadyInUseException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
		}
		return personService.list();
	}

	@RequestMapping(value = "list", method = RequestMethod.GET, produces = "application/json")
	public List<Person> listPersons() {
		return personService.list();
	}

	@RequestMapping(value = "count", method = RequestMethod.GET, produces = "application/json")
	public Long countPersons() {
		return personService.count();
	}
}