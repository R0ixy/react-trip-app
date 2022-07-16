interface iTripDetails {
    title: string;
    duration: number;
    price: number;
}

export interface iBooking {
    id: string,
    userId: string,
    tripId: string,
    guests: number,
    date: string,
    trip: iTripDetails,
    totalPrice: number,
    createdAt: string,
}