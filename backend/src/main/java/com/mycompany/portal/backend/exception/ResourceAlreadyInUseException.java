package com.mycompany.portal.backend.exception;

public class ResourceAlreadyInUseException extends Exception {

	private static final long serialVersionUID = -7304555196226290399L;

	public ResourceAlreadyInUseException() {
	}

	public ResourceAlreadyInUseException(String message) {
		super(message);
	}

	public ResourceAlreadyInUseException(String message, Exception exception) {
		super(message, exception);
	}
}
