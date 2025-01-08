// import React from "react";
// import bg from "../assets/vector3.png";
// import food1 from "../assets/biryani2.png";
// import food2 from "../assets/vegbir.avif";
// import food3 from "../assets/vegbir2.webp";

// const imagelist=[
//     {
//         id=1,
//         image=food1,
//     },
//     {
//         id=2,
//         image=food2,
//     },
//     {
//         id=3,
//         image=food3,
//     },
// ];
// const bgimg=[
//     backgroundImage=`URL(${bg})`,
//     backgroundpos="center",
//     backgroundsize="cover",
//     backgroundrepeat="no-repeat",
//     width="100%",
//     height="100vh",
// ];
// const hero = () => {
//     const [imageid,setimageid]=React.useState(food1);
//     return(
//         <>
//             <div style={bgimg} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">
//                 <div className="container pb-8 sm:pb-0"></div>
//             </div>
//         </>
//     )
// }

import React, { useState } from "react";
import bg from "../assets/vector3.png";
import food0 from "../assets/biryani2.png"
import food1 from "../assets/biryani_cover.jpg";
import food2 from "../assets/vegbir.avif";
import food3 from "../assets/vegbir2.webp";

const imagelist = [
    {
        id: 1,
        image: food1,
    },
    {
        id: 2,
        image: food2,
    },
    {
        id: 3,
        image: food3,
    },
];

const Hero = () => {
    const [imageId, setImageId] = useState(food0);

    const bgimg = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
    };

    return (
        <>
            <div style={bgimg} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    {/* <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
                        Welcome to Khana Khjana Delight
                    </h1> */}
                    {/* <div className="flex justify-center gap-4 mt-6">
                        {imagelist.map((item) => (
                            <img
                                key={item.id}
                                src={item.image}
                                alt={`Food ${item.id}`}
                                className={`w-32 h-32 object-cover rounded-full cursor-pointer border-4 ${
                                    imageId === item.image
                                        ? "border-primary"
                                        : "border-gray-300"
                                }`}
                                onClick={() => setImageId(item.image)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <img
                            src={imageId}
                            alt="Selected Food"
                            className="w-80 h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div> */}
                    {/* text section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="flex flex-col justify-center items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Welcome to the Khana Khjana</h1>
                            <p className="text-sm px-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 cursor-pointer border">Order Now</button>
                            </div>
                        </div>
                        {/* image section */}
                        <div className="order-1 sm:order-2 min-h-[450px] flex justify-center items-center relative">
                            <div className="flex justify-center item-center h-[300px] sm:h-[450px] overflow-hidden mb-[-100px]">
                                <img src={imageId} alt className="h-[300px] sm:h-[230px] md:h-[250px] mx-auto spin"/>
                            </div>
                            <div className="flex lg:flex-col mx-auto lg:py-2 justify-center gap-4 absolute bottom-[-1px] lg:-right-10 bg-white/30 rounded-full">
                                {imagelist.map((item) => (
                                    <img key={item.id} src={item.image} alt={`Food ${item.id}`} className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-105 duration-200 rounded-full border-y-4"/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Hero;
