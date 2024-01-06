import { AiOutlineSwapRight } from "react-icons/ai";
import { Button } from "@mantine/core";
const Home = () => {
  return (
    <>
      <section className=" h-screen relative ">
        <div className=" absolute w-full h-full bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwYWdlbmN5fGVufDB8fDB8fHww')]">
          <div className="absolute w-full h-full bg-orange-100 opacity-30"></div>
          <div className=" absolute  w-full top-[40%]">
            <div className=" flex flex-col gap-5 px-5 justify-center items-center ">
              <h1 className="text-5xl font-bold">Travel Dreams!</h1>
              <p className=" sm:max-w-[50%] text-small">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button variant="filled" color="orange" size="md" radius="xl">
                Get Started
                <span>
                  <AiOutlineSwapRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
