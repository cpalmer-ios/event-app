import { useEffect, useState } from "react";
import moment from "moment"
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export const Events = () => {
  const [events, setEvents]: any[] = useState();

  const getEvents = async () => {
    await fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  useEffect(() => {
    getEvents();
  }, [events]);

  return (
    <>
      <Navbar />
      <div className="mt-10 mb-20 flex flex-col items-center">
      {events &&
        events.map((event: any) => (
          <>
              <Link 
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5 mb-5"
              to={'/events/' + event._id}>
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg"
                alt=""
              ></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {event.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  {moment(event.date).format('MMMM Do YYYY')}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  tickets: {event.tickets}
                </p>
              </div>
            </Link>
          </>
        ))}
        </div>
        <Footer />
    </>
  );
};
