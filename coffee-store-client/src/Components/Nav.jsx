import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="md:w-[1920] bg-[url('https://i.ibb.co/T4h8nBw/Rectangle-1.png')] flex items-center justify-center">
            <img src="https://i.ibb.co/cgfxJKH/logo1-1.png" alt="" />
            <h4 className='text-white text-4xl md:text-6xl font-Rancho'>Espresso Emporium</h4>
            <Link to='/register'><button className="text-white font-Rancho ml-6 p-2 rounded-lg text-2xl bg-[#331A15]">Login/Register</button></Link>
        </div>
    );
};

export default Nav;