package com.mycompany.portal.backend.service;

import java.io.Serializable;
import java.util.List;

public interface CRUDService<T> {

	T addOrUpdate(T t);

	void delete(Serializable id);

	List<T> list();

	Long count();
}
