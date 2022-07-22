interface iTripDetails {
    title: string;
    duration: number;
    price: number;
}

export interface iCreateBooking{
    tripId: string;
    userId: string;
    guests: number;
    date: string;
}

export interface iBooking extends iCreateBooking{
    id: string;
    trip: iTripDetails,
    totalPrice: number,
    createdAt: string,
}