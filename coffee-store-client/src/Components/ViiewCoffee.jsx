import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ViewCoffee = () => {

    const Coffee = useLoaderData()
    console.log(Coffee)

    const textShadowStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Customize the shadow properties as needed
      };

    return (
        <div>
            <Link to='/'><h1 className="text-2xl flex items-center gap-2 font-Rancho font-semibold ml-12 md:ml-44 mt-6"><span><FaArrowLeft></FaArrowLeft></span> Back To Home</h1></Link>
            <div className="bg-[#F4F3F0] w-3/4 mx-auto mt-6 md:mb-12 rounded-lg">
                <div className="w-3/4 mx-auto py-6 mt-12 flex-col md:flex-row flex items-center justify-around">
                    <div>
                        <img src={Coffee.photo} className="w-72" alt="" />
                    </div>
                    <div>
                        <h4 className="text-center text-4xl font-Rancho font-semibold" style={textShadowStyle}>Niceties</h4>
                        <p><span className="font-semibold mr-2">Name:</span> {Coffee.name}</p>
                        <p><span className="font-semibold mr-2">Chef:</span> {Coffee.chef}</p>
                        <p><span className="font-semibold mr-2">Supplier:</span> {Coffee.supplier}</p>
                        <p><span className="font-semibold mr-2">Price:</span> {Coffee.price}</p>
                        <p><span className="font-semibold mr-2">Category:</span> {Coffee.category}</p>
                        <p><span className="font-semibold mr-2">Details:</span> {Coffee.details}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCoffee;