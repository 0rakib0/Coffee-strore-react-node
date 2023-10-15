

const Banner = () => {
    return (
        <div className="h-[500px] bg-[url('https://i.ibb.co/9NtXdZ4/3.png')] bg-left-top lg:bg-center bg-cover bg-no-repeat flex  justify-center items-center">
            <div className='mx-6 w-full md:w-6/12 lg:ml-[40%]'>
                <h2 className='text-white text-7xl font-Rancho'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='text-white md:text-xl my-4 text-red '>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='mt-2 bg-[#E3B577] py-3 hover:border-2 hover:border-white hover:bg-transparent hover:text-white rounded-md px-6 font-Rancho text-4xl text-black'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;