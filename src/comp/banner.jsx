import React from "react";
import food1 from "../assets/biryani5.png";
import {GrSecure} from "react-icons/gr";
import {IoFastFood} from "react-icons/io5";
import {GiFoodTruck} from "react-icons/gi";
const Banner=()=>{
    return<>
        <div className="min-h-[500px] dark:bg-gray-900">
            <div className="container" data-aos="slide-up" data-aos-duration="200">
                <div className="flex justify-around py-20">
                    {/* image section */}
                    <div>
                        <img src={food1} className="max-w-[400px] w-full mx-auto drop-shadow-[-15px_15px_12px_rgba(0,0,0,0.4)]"/>
                    </div>
                    {/* text section */}
                    <div className="flex flex-col gap-6 justify-center sm:pt-0">
                        <h1 className=" text-3xl sm:text-4xl font-bold dark:text-white">Operations</h1>
                        <p className="text-sm text-gray-500 tracking-tight leading-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's<br/> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        <br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                        <div className="flex gap-5">
                            <GrSecure className="text-2sm h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400"/>
                            <IoFastFood className="text-2sm h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400"/>
                            <GiFoodTruck className="text-2sm h-20 w-20 shadow-sm p-5 rounded-full bg-blue-100 dark:bg-blue-400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Banner ;