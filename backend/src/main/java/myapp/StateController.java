package myapp;

import javax.ws.rs.*;
import java.util.ArrayList;
import java.util.List;

@Path("/state")
public class StateController {

    private List<State> list = new ArrayList<State>();

    public StateController() {

    }

    @POST
    @Consumes("text/plain")
    @Produces("APPLICATION/JSON")
    public List<State> stateList(@PathParam("code") String code) {

        switch(code) {
            case "AU":
                populateAU();
            case "CA":
                populateCA();
            case "US":
                populateUS();
            default:
        }

        return list;
    }

    private void populateAU() {
        list.add(new State("ACT","Austrailian Capital Territory"));
        list.add(new State("WA","Western Australia"));
        list.add(new State("NSW","New South Wales"));
    }

    private void populateCA() {
        list.add(new State("AB","Alberta"));
        list.add(new State("QC","Quebec"));
        list.add(new State("AB","Alberta"));
    }

    private void populateUS() {
        list.add(new State("VA","Virginia"));
        list.add(new State("CA","California"));
        list.add(new State("NJ","New Jersey"));
    }
}