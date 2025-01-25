import FlightTicket from "../../../../src/gof/creational/builder/FlightTicket";
import FlightTicketBuilder from "../../../../src/gof/creational/builder/FlightTicketBuilder";

test("Deve criar uma passagem aérea", () => {
    const builder = new FlightTicketBuilder()
        .setFlight("Azul", "1234")
        .setTrip("CXS", "GRU")
        .setPassenger("John Doe", "john.doe@gmail.com", "111.111.111-11", "M")
        .setEmergencyContact("Jane Doe", "5554999999999")
        .setSeat("1A")
        .setCheckedBags(2)
        .setCheckinInformation(true, "1", "4A")
        .setPriority(5);

    const flightTicket = new FlightTicket(builder);
    expect(flightTicket.flightCode).toBe("1234");
    expect(flightTicket.passengerName).toBe("John Doe");
})