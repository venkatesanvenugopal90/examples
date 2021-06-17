package com.mycompany.portal.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "address", uniqueConstraints = {
		@UniqueConstraint(columnNames = { "street", "city", "state", "postalcode" }) })
public class Address implements java.io.Serializable {

	private static final long serialVersionUID = -7472071922644109144L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "street", nullable = false, length = 20)
	private String street;

	@Column(name = "city", nullable = false, length = 20)
	private String city;

	@Column(name = "state", nullable = false, length = 20)
	private String state;

	@Column(name = "postalcode", nullable = false)
	private String postalCode;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStreet() {
		return this.street.toUpperCase();
	}

	public void setStreet(String street) {
		this.street = street.toUpperCase();
	}

	public String getCity() {
		return this.city.toUpperCase();
	}

	public void setCity(String city) {
		this.city = city.toUpperCase();
	}

	public String getState() {
		return this.state.toUpperCase();
	}

	public void setState(String state) {
		this.state = state.toUpperCase();
	}

	public String getPostalCode() {
		return this.postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj == this)
			return true;
		if (!(obj instanceof Address))
			return false;
		Address otherObj = (Address) obj;
		return ((this.street == null && otherObj.street == null)
				|| (this.street != null && this.street.equals(otherObj.street))
						&& (this.city == null && otherObj.city == null)
				|| (this.city != null && this.city.equals(otherObj.city))
						&& (this.state == null && otherObj.state == null)
				|| (this.state != null && this.state.equals(otherObj.state))
						&& (this.postalCode == null && otherObj.postalCode == null)
				|| (this.postalCode != null && this.postalCode.equals(otherObj.postalCode)));
	}

	@Override
	public final int hashCode() {
		int result = 17;
		if (this.street != null) {
			result = 31 * result + this.street.hashCode();
		}
		if (this.city != null) {
			result = 31 * result + this.city.hashCode();
		}
		if (this.state != null) {
			result = 31 * result + this.state.hashCode();
		}
		if (this.postalCode != null) {
			result = 31 * result + this.postalCode.hashCode();
		}
		return result;
	}

	@Override
	public String toString() {
		return "Address [id=" + id + ", street=" + street + ", city=" + city + ", state=" + state + ", postalCode="
				+ postalCode + "]";
	}
}
