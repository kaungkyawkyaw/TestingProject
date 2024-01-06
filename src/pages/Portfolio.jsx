import { RiServiceLine,RiCustomerService2Line } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <>
    <div className="container mt-20 mx-auto">
        <div className=" sm:h-[500px] gap-y-5 gap-x-2 sm:gap-x-5 md:gap-x-10 xl:gap-x-20 flex flex-col sm:flex-row justify-center items-center  px-5">
            <div className=" flex h-full flex-col gap-y-2 sm:gap-y-0  justify-around">
                <div className=" flex flex-col gap-y-2 sm:gap-y-1">    
                    <h1 className=" text-3xl font-bold">Why Should You Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, unde.</p>
                </div>
                <div className=" flex flex-col gap-y-5 max-w-[500px]">
                    <div className=" grid grid-cols-5">
                        <div className=" col-span-1 flex justify-center items-center text-[60px]"><RiServiceLine /></div>
                        <div className=" col-span-4">
                            <h1 className=" text-2xl font-bold">Safety & support</h1>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit tempora voluptate illum dolorum.
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-5">
                        <div className=" col-span-1 flex justify-center items-center text-[60px]"><FaMapLocationDot /></div>
                        <div className=" col-span-4">
                            <h1 className=" text-2xl font-bold">Range of Destinations</h1>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit tempora voluptate illum dolorum.
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-5">
                        <div className=" col-span-1 flex justify-center items-center text-[60px]"><RiCustomerService2Line /></div>
                        <div className=" col-span-4">
                            <h1 className=" text-2xl font-bold">Customer Support</h1>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit tempora voluptate illum dolorum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className=" rounded-lg" src="https://media.istockphoto.com/id/1041156320/photo/therapist-at-work.webp?b=1&s=170667a&w=0&k=20&c=sPUDvhn34aOmwhB0ym5E_uRRnkyLQ_qXSq2XPSQ9HIc=" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio