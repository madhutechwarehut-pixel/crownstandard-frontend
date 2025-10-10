export interface Booking {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  time: string;
  price: string;
  image: string;
}

export interface BookingCus {
  id: string;
  serviceName: string;
  price: number;
  currency: string;
  time: string;
  duration: string;
  address: string;
  provider: string;
  instruction: string;
  status: "Pending" | "Confirmed" | "Cancelled"; // optional: limit to known values
  cancelFee?: number;
}
