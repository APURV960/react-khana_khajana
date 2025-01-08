import React from "react";
// import img1 from "../assets/biryani_cover.jpg";
// import img2 from "../assets/biryani3.png";
import img3 from "../assets/biryani2.png";
const servicedata=[
    {
        id:1,
        image:img3,
        name:"Biryani",
        descrip:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id:2,
        image:img3,
        name:"veg cury",
        descrip:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id:3,
        image:img3,
        name:"coffee",
        descrip:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
];
const Service=()=>{
    return(
        <>
            <div className="py-10 dark:bg-gray-900">
                <div className="container ">
                    <div className="text-center mb-20 max-wid-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                        <h1 className="text-3xl font-bold dark:text-white">Services</h1>
                        <p className="text-xs text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    {/* card section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {
                            servicedata.map(({id,image,name,descrip})=>{
                                return <div key={id} className="max-w-[300px] mx-auto group bg-white  dark:bg-gray-600 p-4 shadow-xl rounded-2xl transform hover:bg-primary duration-300 hover:text-white">
                                    <div className="h-[100px]">
                                        <img src={image} alt="" className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"/>
                                    </div>
                                    <div className="text-center p-2" >
                                        <h2 className="text-xl font-bold hover:text-white duration-0 dark:group-hover:text-primary dark:duration-200">{name}</h2>
                                        <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-white duration-200">{descrip}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;