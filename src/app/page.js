import Booking from "../components/booking/booking.jsx";

export const metadata = {
  title: "Barber Booking - Schedule Your Appointment",
  description:
    "Book your barber appointment online. Choose your preferred barber, service, date and time.",
  keywords: "barber, booking, appointment, haircut, barbershop",
};

export default function Home() {
  return (
    <div>
      <main>
        <Booking />
      </main>
    </div>
  );
}
