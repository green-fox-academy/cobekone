interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

export class Reservation implements Reservationy {
  getDowBooking(): string {
    let dow: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    return dow[Math.floor(Math.random() * 7)];
  }

  getCodeBooking(): string {
    let codegen: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let eightDigits: string = "";
    for (let i = 0; i < 7; i++) {
      eightDigits += codegen[Math.floor(Math.random() * 37)];
    }
    return eightDigits;
  }

  getFullBooking() {
    console.log(
      "Booking# " + this.getCodeBooking() + " for " + this.getDowBooking()
    );
  }
}
