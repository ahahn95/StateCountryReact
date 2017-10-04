package myapp;

import org.springframework.stereotype.Component;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.util.ArrayList;
import java.util.List;

@Path("/countries")
@Component
public class CountryController {

//    @CrossOrigin
//    @RequestMapping("/country")
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Country> countryList() {
        List<Country> list = new ArrayList<>();

        list.add(new Country("AU","Australia"));
        list.add(new Country("CA","Canada"));
        list.add(new Country("US","United States"));

        return list;
    }
}