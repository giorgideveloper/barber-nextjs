import Booking from "../components/booking/booking.jsx";

export const metadata = {
  title: "Barber Booking - Schedule Your Appointment",
  description:
    "Book your barber appointment online. Choose your preferred barber, service, date and time.",
  keywords: "barber, booking, appointment, haircut, barbershop",
};

export default function Home() {
  return (
    <>
      <main>
        <Booking />
      </main>
      <footer className="container pb-4">
        <div className="row">
          <div className="col-12">
            <p className="mb-0 text-center text-white">
              Created by{" "}
              <a
                className="text-warning"
                href="https://lumos.com.ge"
                target="_target"
                rel="nofollow"
              >
                Lumos Development
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
