/**
 * 
 */
package org.test.rest;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.test.res.Person;

/**
 * @author tdj2001
 *
 */
@RequestScoped
@Path("/persons")
public class PersonEndpoint {

	/**
	 * @param person
	 * @return
	 */
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Response create(final String person) {
		// TODO: process the given person
		// here we use Person#getId(), assuming that it provides the identifier
		// to retrieve the created Person resource.
		// return
		// Response.created(UriBuilder.fromResource(PersonEndpoint.class).path(String.valueOf(person.getId())).build())
		// .build();

		return Response.ok(person).build();
	}

	/**
	 * @param id
	 * @return
	 */
	@GET
	// @Path("/{id:[0-9][0-9]*}")
	@Path("/{id}")
	@Produces("application/json")
	public Response findById(@PathParam("id") final Long id) {
		// TODO: retrieve the person
		Person person = new Person(10, "tholfikar", "Joudi");
		// if (person == null) {
		// return Response.status(Status.NOT_FOUND).build();
		// }

		return Response.ok(person).build();
	}

	/**
	 * @param startPosition
	 * @param maxResult
	 * @return
	 */
	@GET
	@Produces("application/json")
	public List<Person> listAll(@QueryParam("start") final Integer startPosition, @QueryParam("max") final Integer maxResult) {
		// TODO: retrieve the persons
		final List<Person> persons = null;
		return persons;
	}

	/**
	 * @param id
	 * @param person
	 * @return
	 */
	// @PUT
	// @Path("/{id:[0-9][0-9]*}")
	// @Consumes("application/json")
	// public Response update(@PathParam("id") Long id, final Person person) {
	// //TODO: process the given person
	// return Response.noContent().build();
	// }

	/**
	 * @param id
	 * @return
	 */
	@DELETE
	@Path("/{id:[0-9][0-9]*}")
	public Response deleteById(@PathParam("id") final Long id) {
		// TODO: process the person matching by the given id
		return Response.noContent().build();
	}

}
