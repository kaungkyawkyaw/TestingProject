import { Button } from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";
import { IoCardSharp, IoSearch } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import Cardcomponent from "../components/Card";
const Destination = () => {
  const data = [
    {
      id: 1,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.5,
    },
    {
      id: 2,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://plus.unsplash.com/premium_photo-1665311513485-e15c3f8c833d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 3.5,
    },
    {
      id: 3,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1573155993874-d5d48af862ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFya3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 3.8,
    },
    {
      id: 4,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
    },
    {
      id: 5,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
      rating: 3.5,
    },
    {
      id: 6,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNpdHl8ZW58MHx8MHx8fDA%3D",
      rating: 3.8,
    },
    {
      id: 7,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://plus.unsplash.com/premium_photo-1682048358672-1c5c6c9ed2ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNpdHl8ZW58MHx8MHx8fDA%3D",
      rating: 4.3,
    },
    {
      id: 8,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXNsYW5kfGVufDB8fDB8fHww",
      rating: 3.6,
    },
    {
      id: 9,
      title: "lorem",
      name: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
    },
  ];
  return (
    <>
      <div className=" container mx-auto">
        <div className=" flex flex-col gap-y-10 justify-center items-center">
          <div className=" flex flex-col gap-3 items-center">
            <h1 className=" mx-5 text-2xl font-bold">
              Find Your Dream Destination
            </h1>
            <p className=" text-small mx-5">
              Fill in the fields below to find the best spot for your next tour.
            </p>
          </div>
          <div className=" flex flex-col gap-y-5 sm:gap-x-5 md:flex-row">
            <div className="flex justify-center items-center gap-2 bg-orange-300 p-[0.5rem] rounded-full">
              <div>
                <FaLocationDot />
              </div>
              <input
                className=" bg-transparent border-none outline-none"
                type="text"
                placeholder="Location"
              />
            </div>
            <div className="flex justify-center items-center gap-2 bg-orange-300 p-[0.5rem] rounded-full">
              <div>
                <IoCardSharp />
              </div>
              <input
                className=" bg-transparent border-none outline-none"
                type="text"
                placeholder="Budget"
              />
            </div>
            <div className="flex justify-center items-center gap-2 bg-orange-300 p-[0.5rem] rounded-full">
              <div>
                <MdDateRange />
              </div>
              <input
                className=" bg-transparent border-none outline-none"
                type="text"
                placeholder="Date"
              />
            </div>
            <Button variant="filled" color="orange" size="md" radius="xl">
              <span>
                <IoSearch />
              </span>
              Search
            </Button>
          </div>
          <div className=" flex gap-y-5 flex-col container">
            <div className="hidden sm:flex gap-x-5 justify-center items-center">
              <button className=" px-3 py-2 border border-orange-400 rounded-xl">
                All
              </button>
              <button className=" px-3 py-2 border border-orange-400 rounded-xl">
                Recommended
              </button>
              <button className=" px-3 py-2 border border-orange-400 rounded-xl">
                Beach
              </button>
              <button className=" px-3 py-2 border border-orange-400 rounded-xl">
                Park
              </button>
              <button className=" px-3 py-2 border border-orange-400 rounded-xl">
                Nature
              </button>
              <button className=" px-3 py-2 border border-orange-400 rounded-xl">
                Mountain
              </button>
            </div>
            <div className=" container mx-auto flex flex-wrap gap-10 justify-center items-center">
              {data?.map((product) => {
                return <Cardcomponent key={product?.id} {...product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
