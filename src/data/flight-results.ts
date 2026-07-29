export type FlightResult = {
  id: string;
  airline: string;
  code: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  stops: 0 | 1;
  stopCity?: string;
  price: number;
  refundable: boolean;
};

export const flightResults: FlightResult[] = [
  { id: "f1", airline: "IndiGo", code: "6E", departTime: "06:40", arriveTime: "08:40", duration: "2h 00m", stops: 0, price: 6250, refundable: true },
  { id: "f2", airline: "Air India", code: "AI", departTime: "09:20", arriveTime: "11:40", duration: "2h 20m", stops: 0, price: 6554, refundable: true },
  { id: "f3", airline: "Vistara", code: "UK", departTime: "14:15", arriveTime: "16:15", duration: "2h 00m", stops: 0, price: 7554, refundable: false },
  { id: "f4", airline: "SpiceJet", code: "SG", departTime: "08:25", arriveTime: "10:55", duration: "2h 30m", stops: 0, price: 6554, refundable: true },
  { id: "f5", airline: "Akasa Air", code: "QP", departTime: "17:20", arriveTime: "19:20", duration: "2h 00m", stops: 0, price: 6884, refundable: true },
  { id: "f6", airline: "IndiGo", code: "6E", departTime: "12:15", arriveTime: "14:25", duration: "2h 10m", stops: 0, price: 6884, refundable: true },
  { id: "f7", airline: "Air India", code: "AI", departTime: "21:15", arriveTime: "00:30", duration: "3h 15m", stops: 1, stopCity: "Jammu", price: 6884, refundable: false },
  { id: "f8", airline: "Vistara", code: "UK", departTime: "16:00", arriveTime: "18:15", duration: "2h 15m", stops: 0, price: 6884, refundable: true },
  { id: "f9", airline: "SpiceJet", code: "SG", departTime: "23:45", arriveTime: "02:00", duration: "2h 15m", stops: 0, price: 6884, refundable: false },
  { id: "f10", airline: "IndiGo", code: "6E", departTime: "11:50", arriveTime: "13:45", duration: "1h 55m", stops: 0, price: 6884, refundable: true },
];
