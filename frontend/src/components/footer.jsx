import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Footer() {
    return <section className="bg-black-pearl py-28">
        <div className="flex flex-col container max-w-7xl mx-auto text-white">
            <h2 className="mb-24 text-white font-semibold text-4xl ">Contact Us</h2>

            <form>
                <div className="flex flex-wrap mb-4 ">
                    {/* First Div */}
                    <div className="w-full flex flex-col gap-7 md:w-1/2 px-3 mb-6 md:mb-0 ">
                        {/* Your form inputs for the first div */}
                        <div className="h-full w-full ">
                            <label className="block text-white font-medium" htmlFor="inputField1">
                                Name*
                            </label>
                            <input className=" bg-transparent w-full h-16 font-normal py-2 text-white focus:outline-none border-b-2    transition duration-600 ease-in-out   border-gray-300/30 hover:border-gray-300 focus:border-gray-300" id="inputField1" type="text" placeholder="" />
                        </div>
                        <div>
                            <label className="block text-white font-medium" htmlFor="inputField2">
                                Email address*
                            </label>
                            <input className=" bg-transparent w-full h-16 font-normal py-2 text-white focus:outline-none border-b-2   transition duration-600 ease-in-out border-gray-300/30 hover:border-gray-300 focus:border-gray-300 " id="inputField2" type="text" placeholder="" />
                        </div>
                        <div>
                            <label className="block text-white font-medium" htmlFor="inputField3">
                                Phone*
                            </label>
                            <input className=" bg-transparent w-full h-16 font-normal py-2 text-white focus:outline-none border-b-2  transition duration-600 ease-in-out border-gray-300/30 hover:border-gray-300 focus:border-gray-300 " id="inputField3" type="text" placeholder="" />
                        </div>


                    </div>

                    {/* Second Div */}
                    <div className="w-full md:w-1/2 px-3  ">
                        {/* Your form inputs for the second div */}
                        <div className="h-full w-full">
                            <label className="block text-white font-medium" htmlFor="inputField3">
                                Address*
                            </label>
                            <textarea className="bg-transparent h-full w-full font-normal py-2 text-white focus:outline-none border-b-2   transition duration-600 ease-in-out border-gray-300/30 hover:border-gray-300 focus:border-gray-300 " id="inputField3" type="text" placeholder="" />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="container mx-auto pt-4">
                    <button className=" inline-flex items-center justify-center w-full h-16 bg-orange-500 transition-all ease-in-out hover:bg-orange-400 text-black font-medium cursor-pointer px-16 rounded-full focus:outline-none text-center text-lg " type="button">
                        Send Message Now
                    </button>
                </div>
            </form>



            <div className="py-32 max-w-screen-2xl">
                <div className="flex justify-center gap-x-14 items-center">
                    <div className="w-2/5 px-4 text-sm font-normal">
                        <img className="w-36 mb-7" src="https://itsulu-react.netlify.app/img/logo/logo-light.png" alt="logo" />
                        <p className="mb-7 text-white opacity-50 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                        <a className=" inline-flex gap-x-4 p-3 rounded-md items-center text-sm bg-black transition ease-in-out duration-300  hover:bg-gray-700 mb-1 mr-4" href="">
                            <div className="">
                                <FaGooglePlay size={60} color="white" />
                            </div>
                            <div className="">
                                <span className="text-xs text-orange-400">Available On the</span>
                                <div className="text-base font-semibold">App Store</div>
                            </div>
                        </a>
                        <a className="inline-flex gap-x-1 rounded-md p-3 text-sm bg-black  transition ease-in-out duration-300  hover:bg-gray-700 items-center" href="">
                            <div className="">
                                <FaApple size={60} color="white" />
                            </div>
                            <div className="">
                                <span className="text-xs text-orange-400">Available On the</span>
                                <div className="text-base font-semibold">App Store</div>

                            </div>

                        </a>
                    </div>
                    <div className="w-3/5">
                        <div className="flex">
                            <div className="  mb-7">
                                <h3 className="text-4xl text-white" >Join The <span className="text-orange-400">
                                    ITSulu </span> <br /> Experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer <br />
                                    adipiscing elit, sed diam nonummy.</p>
                            </div>
                            <div className="mb-7">
                                <form action="">
                                    <input type="text" />
                                    <button className="flex"><span>Subscribe Now</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}