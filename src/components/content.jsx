import React from "react";

const Content = () => { 
    return(
        <>
        <div className="h-full bg-black w-full">
        <div className="flex w-full justify-center">
            <div className='w-[90vw] flex flex-col gap-10 items-center'>
                <p className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mr-[10vw] sm:mr-[15vw] md:mr-[20vw] lg:mr-[25vw]">
                    For the Students
                </p>
                <p className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ml-[10vw] sm:ml-[15vw] md:ml-[20vw] lg:ml-[25vw]">
                    By the Students
                </p>
            </div>
        </div>
            <div className="flex flex-col mt-28">
                <p className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                    Supporting
                </p>
                <p className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"> 
                    Young 
                </p>
                <p className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"> 
                    Entrepreneurs
                </p>
            </div>
        </div>
        </>
    );
}

export default Content;