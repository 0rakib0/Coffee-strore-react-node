import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const textShadowStyle = {
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Customize the shadow properties as needed
    };

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffeeData = {name, chef, category, supplier, price, details, photo}

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Coffee Successfully Added!',
                    'You Successfully a coffee item!',
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
                        <h1 className="font-Rancho text-5xl font-semibold pb-2" style={textShadowStyle}>Add New Coffee</h1>
                        <p className="">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="md:flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Test" name="price" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="md:flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter coffee Category" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className=":flex md:justify-center gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter coffee photo url" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className=":flex md:justify-center gap-4 mt-4">
                            <div className="form-control w-full">
                                <input type="submit" value='Add Coffee' className="input input-bordered w-full bg-[#D2B48C] text-2xl font-Rancho hover:bg-white hover:text-[#331A15] hover:border-2 hover:border-[#331A15]" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddCoffee;