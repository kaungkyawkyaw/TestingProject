import { FaRegArrowAltCircleUp } from "react-icons/fa";
const Questions = () => {
  return (
    <div className="container my-20  mx-auto">
        <div className=" sm:h-[500px] gap-y-5 gap-x-2 sm:gap-x-5 md:gap-x-10 xl:gap-x-36 flex flex-col sm:flex-row justify-center items-center  px-5">
            <div className=" flex h-full flex-col gap-y-5  justify-center">
                <h2 className=' text-3xl font-bold'>Frequently Asked Questions</h2>
                <div className=" flex w-full flex-col gap-y-2">
                    <div className="collapse max-w-[450px] bg-orange-200">
                        <input type="checkbox" /> 
                        <div className="flex justify-between items-center collapse-title text-xl font-medium">
                            <div className=" text-small max-w-[200px]">
                            How do I choose the right travel destination for me?
                            </div>
                            <div className=" text-2xl">
                            <FaRegArrowAltCircleUp  />
                            </div>
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elir, sint voluptates iure quia similique asperiores vel! Ipsam, nesciunt maxime!</p>
                        </div>
                    </div>
                    <div className="collapse max-w-[450px] bg-orange-200">
                        <input type="checkbox" /> 
                        <div className="flex justify-between items-center collapse-title text-xl font-medium">
                            <div className=" text-small max-w-[200px]">
                            What are the best time to visit specific destination?
                            </div>
                            <div className=" text-2xl">
                            <FaRegArrowAltCircleUp  />
                            </div>
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing orporis accusantium ducimus totam aut. Suscipit, deserunt.</p>
                        </div>
                    </div>
                    <div className="collapse max-w-[450px] bg-orange-200">
                        <input type="checkbox" /> 
                        <div className="flex justify-between items-center collapse-title text-xl font-medium">
                            <div className=" text-small max-w-[200px]">
                            What essential items should I pack?
                            </div>
                            <div className=" text-2xl">
                            <FaRegArrowAltCircleUp  />
                            </div>
                        </div>
                        <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. alias autem ipsum tempora.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" w-full h-full flex flex-col justify-center items-center gap-y-5 ">
                    <div className=" w-full">
                        <h1 className=" text-2xl font-bold">Do you have any sepcific questions?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, laborum!</p>
                    </div>
                    <div className="w-full flex flex-col gap-y-5">
                        <div className="w-full  gap-2 bg-orange-50 p-[0.5rem] rounded-full">
                                <input
                                    className=" bg-transparent border-none outline-none"
                                    type="text"
                                    placeholder="Email address"
                                />
                        </div>
                        <div className="flex w-full justify-center items-center gap-2 bg-orange-50 p-[0.5rem] ">     
                                <textarea className=" w-full bg-transparent" name="" id="" cols="30" rows="10">
                                    message
                                </textarea>
                        </div>
                        <button className=" w-full py-2 rounded-full bg-orange-400 text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions