package com.mycompany.portal.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "person")
public class Person implements java.io.Serializable {

	private static final long serialVersionUID = 4701508418553558562L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "firstname", nullable = false, length = 20)
	private String firstName;

	@Column(name = "lastname", nullable = false, length = 20)
	private String lastName;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "address_id", referencedColumnName = "id", nullable = true, insertable = true, updatable = true)
	private Address address;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return this.firstName.toUpperCase();
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName.toUpperCase();
	}

	public String getLastName() {
		return this.lastName.toUpperCase();
	}

	public void setLastName(String lastName) {
		this.lastName = lastName.toUpperCase();
	}

	public Address getAddress() {
		return this.address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == this)
			return true;
		if (!(obj instanceof Person))
			return false;
		Person otherObj = (Person) obj;
		return ((this.id == null && otherObj.id == null) || (this.id != null && this.id.equals(otherObj.id)))
				&& ((this.address == null && otherObj.address == null)
						|| (this.address != null && this.address.equals(otherObj.address)));
	}

	@Override
	public final int hashCode() {
		int result = 17;
		if (this.id != null) {
			result = 31 * result + this.id.hashCode();
		}
		if (this.address != null) {
			result = 31 * result + this.address.hashCode();
		}
		return result;
	}

	@Override
	public String toString() {
		return "Person [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", address=" + address
				+ "]";
	}
}
