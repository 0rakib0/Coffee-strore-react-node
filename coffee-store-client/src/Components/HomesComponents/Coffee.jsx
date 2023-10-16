import PropTypes from 'prop-types';
import { AiFillEye, AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'




const Coffee = ({ coffee }) => {
    const { _id, name, chef, price, photo } = coffee




    const handleDelete = () => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You Want to delete it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
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
                <Link to={`/view-coffee/${_id}`}><AiFillEye className="bg-[#D2B48C] text-white text-3xl p-2"></AiFillEye></Link>
                <Link to={`/update-coffee/${_id}`}><AiTwotoneEdit className="bg-[#3C393B] mt-2 text-white text-3xl p-2"></AiTwotoneEdit></Link>
                <AiFillDelete onClick={handleDelete} className="bg-[#EA4744] text-white text-3xl p-2"></AiFillDelete>
            </div>
        </div>
    )
}

Coffee.propTypes = {
    coffee: PropTypes.object,
}

export default Coffee