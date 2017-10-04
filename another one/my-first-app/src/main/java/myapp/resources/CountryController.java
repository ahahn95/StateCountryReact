package myapp.resources;

import myapp.Country;
import org.springframework.stereotype.Component;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.util.ArrayList;
import java.util.List;

@Path("/")
@Component
public class CountryController {

    @GET
    @Path("/countries")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Country> countryList() {
        System.out.println("\n\nGetting countries list...\n\n");
        List<Country> list = new ArrayList<>();

        list.add(new Country("AU","Australia"));
        list.add(new Country("CA","Canada"));
        list.add(new Country("US","United States"));

        return list;
    }
}