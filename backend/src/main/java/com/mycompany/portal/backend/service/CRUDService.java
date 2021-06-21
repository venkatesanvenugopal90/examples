package com.mycompany.portal.backend.service;

import java.io.Serializable;
import java.util.List;

import com.mycompany.portal.backend.exception.ResourceAlreadyExistException;
import com.mycompany.portal.backend.exception.ResourceAlreadyInUseException;

public interface CRUDService<T> {

	T addOrUpdate(T t) throws ResourceAlreadyExistException;

	void delete(Serializable id) throws ResourceAlreadyInUseException;

	List<T> list();

	Long count();
}
