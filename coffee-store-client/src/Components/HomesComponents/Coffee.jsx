
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
            <div className="md:ml-24">
                <AiFillEye></AiFillEye>
                <AiTwotoneEdit></AiTwotoneEdit>
                <AiFillDelete></AiFillDelete>
            </div>
        </div>
    )
}

export default Coffee