package com.mycompany.portal.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.mycompany.portal.backend.service.CRUDService;
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
		personService.addOrUpdate(person);
		return personService.list();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public List<Person> deletePerson(@PathVariable Long id) {
		personService.delete(id);
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