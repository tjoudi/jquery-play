/**
 * 
 */
package org.test.res;

/**
 * @author tdj2001
 *
 */
public class Person {

	private long id;
	private String fristName;
	private String lastName;

	public Person() {
	}

	public Person(long id, String fristName, String lastName) {
		super();
		this.id = id;
		this.fristName = fristName;
		this.lastName = lastName;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFristName() {
		return fristName;
	}

	public void setFristName(String fristName) {
		this.fristName = fristName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
