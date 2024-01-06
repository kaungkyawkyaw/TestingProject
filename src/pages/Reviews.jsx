
import { Rating } from '@mantine/core';
import { Avatar } from '@mantine/core';
const Reviews = () => {
  return (
    <>
     <div className="container my-20 sm:mt-0 mx-auto">
        <div className=" sm:h-[500px] gap-y-5 gap-x-2 sm:gap-x-5 md:gap-x-10 xl:gap-x-11 flex flex-col sm:flex-row justify-center items-center  px-5">
            <div className=" flex h-full flex-col gap-y-5  justify-center">
                <div className=" flex flex-col gap-y-1">    
                    <h1 className=" text-3xl font-bold">From Our Clients</h1>
                    <p className=' text-small max-w-[450px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nihil rem eos fugit pariatur eligendi, molestias fuga quia esse placeat, aliquam unde! Ullam veniam tenetur eum minima similique perspiciatis aut!</p>
                </div>
                <Rating fractions={5} defaultValue={5} readOnly />
                <Avatar.Group>
                    <Avatar src="data:image/jpeg;base64,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" />
                    <Avatar src="data:image/jpeg;base64,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" />
                    <Avatar src="data:image/jpeg;base64,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" />
                    <Avatar>+5</Avatar>
                </Avatar.Group>
            </div>
            <div>
                <img className=" rounded-lg" src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpZW50fGVufDB8fDB8fHww" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Reviews