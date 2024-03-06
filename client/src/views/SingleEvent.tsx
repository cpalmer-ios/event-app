import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import moment from "moment";

export const SingleEvent = () => {
  const { id } = useParams();
  const [event, setEvent]: any[] = useState();

  const getEventById = async () => {
    await fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  };

  useEffect(() => {
    getEventById();
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="mt-20 mb-20">
        <h1 className="font-semibold text-5xl">{event && event.name}</h1>
        <h1>{event && moment(event.date).format("MMMM Do YYYY")}</h1>
        <p>{event && event.description}</p>
        <p>Tickets:&nbsp;{event && event.tickets}</p>
      </section>
      <section className="mt-10 mb-20 flex flex-col items-center">
        <h1>Select Ticket(s)</h1>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5 mb-5 p-4">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg pr-5"
            src="https://media.istockphoto.com/id/971660244/vector/ticket-on-red-background.jpg?s=612x612&w=0&k=20&c=eBJc99otWnvT7PhMqiTGP_vwafAZF599i5cSHTUIj9s="
            alt=""
          ></img>
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="ticketType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Basic Ticket
            </label>
            <select
              id="ticketType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            >
              <option selected>Type</option>
              <option value="A">Adult</option>
              <option value="F">Family</option>
              <option value="C">Child</option>
            </select>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            >
              <option selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <p>Price &nbsp;</p>
              <p>£10.00 ea</p>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-5 mb-5 p-4">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg pr-5"
            src="https://media.istockphoto.com/id/971660244/vector/ticket-on-red-background.jpg?s=612x612&w=0&k=20&c=eBJc99otWnvT7PhMqiTGP_vwafAZF599i5cSHTUIj9s="
            alt=""
          ></img>
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="ticketType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Advanced Ticket
            </label>
            <select
              id="ticketType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            >
              <option selected>Type</option>
              <option value="A">Adult</option>
              <option value="F">Family</option>
              <option value="C">Child</option>
            </select>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            >
              <option selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <p>Price &nbsp;</p>
              <p>£25.00 ea</p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};
