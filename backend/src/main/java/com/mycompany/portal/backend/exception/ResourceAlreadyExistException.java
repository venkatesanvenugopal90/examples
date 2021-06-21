package com.mycompany.portal.backend.exception;

public class ResourceAlreadyExistException extends Exception {

	private static final long serialVersionUID = -2464016089212076309L;

	public ResourceAlreadyExistException() {
	}

	public ResourceAlreadyExistException(String message) {
		super(message);
	}

	public ResourceAlreadyExistException(String message, Exception exception) {
		super(message, exception);
	}
}
