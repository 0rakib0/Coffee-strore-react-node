import { Link } from "react-router-dom";

import { BsCup } from "react-icons/bs";
import { useEffect, useState } from "react";
import Coffee from "./Coffee";

const Items = () => {

    const [coffees, setCoffees] = useState([])
    const textShadowStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Customize the shadow properties as needed
      };

      useEffect(()=>{
        fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => setCoffees(data))
      },[])
    return (
        <div className="w-3/4 mx-auto">
            <div className="text-center">
                <h4 className="text-xl font-Relway my-2">--- Sip & Savor ---</h4>
                <h2 className="text-[#331A15] text-6xl font-Rancho font-semibold" style={textShadowStyle}>Our Popular Products</h2>
                <Link to='/add-coffee' className="flex justify-center"><button className="text-2xl font-Rancho bg-[#E3B577] py-2 px-8 my-4 rounded-lg border-2 border-[#331A15] text-white flex items-center gap-3" style={textShadowStyle}>Add Coffee <BsCup className="text-[#331A15] font-semibold"></BsCup></button> </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee =><Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    )
}

export default Items;