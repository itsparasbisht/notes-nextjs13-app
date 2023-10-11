import Image from "next/image";
import { BiNote } from "react-icons/bi";

export default function AppBar() {
  function generateDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const weeks = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const week = date.getDay() - 1;

    return `${weeks[week]} | ${months[month]} ${day}, ${year}`;
  }

  return (
    <header>
      <div className="p-5 pb-0 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={"/app-icon.png"} width="70" height="70" alt="app icon" />
          <h5 className="text-xl font-medium text-gray-300">NotesJS</h5>
        </div>
        <div className="form-control w-1/2">
          <div className="input-group">
            <input
              type="text"
              placeholder="search your notes…"
              className="input input-bordered w-full focus:outline-none"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <h5 className="text-gray-400 sm:hidden md:visible">{generateDate()}</h5>
        <button className="btn btn-primary btn-sm sm:btn-sm md:btn-md">
          New Note <BiNote className="text-2xl" />
        </button>
      </div>
      <div className="divider"></div>
    </header>
  );
}
