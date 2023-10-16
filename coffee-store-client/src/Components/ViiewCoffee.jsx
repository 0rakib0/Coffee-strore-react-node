import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ViewCoffee = () =>{

    const Coffee = useLoaderData()
    console.log(Coffee)
    const textShadowStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Customize the shadow properties as needed
    };
    return (
        <div>
            <Link to='/'><h1 className="text-2xl flex items-center gap-2 font-Rancho font-semibold ml-12 md:ml-44 mt-6"><span><FaArrowLeft></FaArrowLeft></span> Back To Home</h1></Link>
            <div className="bg-[#F4F3F0] w-3/4 mx-auto text-center mt-6 md:mb-12 rounded-lg">
                <div className="w-3/4 mx-auto py-6 mt-12">
                    <div className="py-6">
                        <h1 className="font-Rancho text-5xl font-semibold pb-2" style={textShadowStyle}>Add New Coffee</h1>
                        <p className="">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCoffee;