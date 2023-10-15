
import { AiFillEye, AiTwotoneEdit, AiFillDelete } from "react-icons/ai";



const Coffee = ({coffee}) =>{
    const {name, chef, category, supplier, price, details, photo} = coffee
    return (
        <div className="grid grid-cols-3 items-center bg-[#F5F4F1] rounded gap-4 md:p-4">
            <div>
                <img src={photo} className="w-44" alt="" />
            </div>
            <div>
                <h2 className="md:text-md md:mt-4">Name: {name}</h2>
                <h4 className="md:text-md md:mt-4">Chef: {chef}</h4>
                <p className="md:text-md md:mt-4">Price: {price}</p>         
            </div>
            <div className="md:ml-24 space-y-2">
                <AiFillEye className="bg-[#D2B48C] text-white text-3xl p-2"></AiFillEye>
                <AiTwotoneEdit className="bg-[#3C393B] text-white text-3xl p-2"></AiTwotoneEdit>
                <AiFillDelete className="bg-[#EA4744] text-white text-3xl p-2"></AiFillDelete>
            </div>
        </div>
    )
}

export default Coffee