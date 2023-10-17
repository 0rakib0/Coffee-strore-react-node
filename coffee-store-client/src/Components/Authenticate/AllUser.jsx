import { Link, useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {

    const users = useLoaderData()

    const textShadowStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Customize the shadow properties as needed
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Want to Delete This user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deleteCount >0){
                            Swal.fire(
                                'User Successfully Deleted!',
                                'your argeted user deleted',
                                'success'
                              )
                        }
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
        <div>
            <Link to='/'><h1 className="text-2xl flex items-center gap-2 font-Rancho font-semibold ml-12 md:ml-44 mt-6"><span><FaArrowLeft></FaArrowLeft></span> Back To Home</h1></Link>
            <div className="bg-[#F4F3F0] w-3/4 mx-auto text-center mt-6 md:mb-12 rounded-lg">
                <div className="w-3/4 mx-auto py-6 mt-12">
                    <div className="py-6">
                        <h1 className="font-Rancho text-5xl font-semibold pb-2" style={textShadowStyle}>All User List</h1>
                        <p className="">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th className="text-xl font-bold">Name</th>
                                    <th className="text-xl font-bold">Email</th>
                                    <th className="text-xl font-bold">Created At</th>
                                    <th className="text-xl font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    users.map(u => <tr key={u._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={u.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{u.fullName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{u.email}</span>
                                        </td>
                                        <td>10/10/23</td>
                                        <th>
                                            <AiFillDelete onClick={() => handleDelete(u._id)} className="bg-[#EA4744] text-white text-3xl p-2"></AiFillDelete>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;