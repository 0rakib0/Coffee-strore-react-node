import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
// import Swal from 'sweetalert2'
const Register = () => {

    const { createUser } = useContext(AuthContext)

    const textShadowStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Customize the shadow properties as needed
    };


    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const fullName = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value


        const userData = {
            fullName,
            email,
            photo,
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
            })
        })
        .catch(error =>{
            console.log(error.message)
        })



    }   
    return (
        <div>
            <Link to='/'><h1 className="text-2xl flex items-center gap-2 font-Rancho font-semibold ml-12 md:ml-44 mt-6"><span><FaArrowLeft></FaArrowLeft></span> Back To Home</h1></Link>
            <div className="bg-[#F4F3F0] w-3/4 mx-auto text-center mt-6 md:mb-12 rounded-lg">
                <div className="w-3/4 mx-auto py-6 mt-12">
                    <div className="py-6">
                        <h1 className="font-Rancho text-5xl font-semibold pb-2" style={textShadowStyle}>Create Account</h1>
                        <p className="">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className=":flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className=":flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Email" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className=":flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Email" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className=":flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className=":flex md:justify-center gap-4 mt-4">
                            <div className="form-control w-full">
                                <input type="submit" value='Register' className="input input-bordered w-full bg-[#D2B48C] text-2xl font-Rancho hover:bg-white hover:text-[#331A15] hover:border-2 hover:border-[#331A15]" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;