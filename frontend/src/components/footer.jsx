import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Footer() {
    return <section className="bg-black-pearl py-28">
        <div className="flex flex-col container max-w-7xl text-white">
            <h2 className="mb-24 text-white font-semibold text-4xl ">Contact <span className="text-orange-500">Us</span> </h2>

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
                        <div className="h-full w-full transition duration-600 ease-in-out border-b-2 border-gray-300/30 hover:border-gray-300 focus:border-gray-300">
                            <label className="block text-white font-medium" htmlFor="inputField3">
                                Address*
                            </label>
                            <textarea className="bg-transparent h-full w-full font-normal pt-2 text-white focus:outline-none " id="inputField3" type="text" placeholder="" />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex box-border w-full pt-4">
                    <button className=" w-full inline-flex items-center justify-center h-16 bg-orange-500 transition-all ease-in-out hover:bg-orange-400  font-base font-medium cursor-pointer px-16 rounded-full focus:outline-none text-center sm:text-lg whitespace-nowrap " type="button">
                        <span className="text-black"> Send Message Now</span>
                    </button>
                </div>
            </form>



            <div className="py-32">
                <div className="flex flex-col sm:gap-y-24 sm:flex-row justify-center sm:gap-x-4 items-center">
                    <div className=" sm:w-2/5 text-sm mb-8 font-normal">
                        <img className="w-36 mb-7" src="https://itsulu-react.netlify.app/img/logo/logo-light.png" alt="logo" />
                        <p className="mb-7 text-white opacity-50 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                        <a className=" inline-flex gap-x-4 py-3 mb-1 mr-4 rounded-md items-center text-sm bg-black transition ease-in-out duration-300  hover:bg-gray-700 " href="">
                            <div className="flex w-16 justify-center">
                                <FaGooglePlay size={32} color="white" />
                            </div>
                            <div className=" w-[130px] ">
                                <span className="text-xs text-orange-400">Available On the</span>
                                <div className="text-base font-semibold">Google Play</div>
                            </div>
                        </a>
                        <a className="inline-flex gap-x-4 py-3 mb-1rounded-md   text-sm bg-black  transition ease-in-out duration-300  hover:bg-gray-700 items-center" href="">
                            <div className="flex w-16 justify-center">
                                <FaApple size={32} color="white" />
                            </div>
                            <div className="w-[130px]">
                                <span className="text-xs text-orange-400">Available On the</span>
                                <div className="text-base font-semibold">App Store</div>

                            </div>

                        </a>
                    </div>
                    <div className="sm:w-3/5 w-full text-sm font-normal ">
                        <div className="flex flex-col w-full sm:flex-row ">
                            <div className="  mb-7">
                                <h3 className="text-4xl mb-8 text-white" >Join The <span className="text-orange-400">
                                    ITSulu </span> <br /> Experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer <br />
                                    adipiscing elit, sed diam nonummy.</p>
                            </div>
                            <div className="w-full box-border mb-7">
                                <form action="">
                                    <input className="w-full h-[70px] px-8 bg-white mb-1 rounded-full font normal text-center " type="text" placeholder="Your email address" />
                                    <button className="inline-flex w-full cursor-pointer h-[70px] px-[60px] font-medium whitespace-nowrap items-center justify-center text-center transition bg-orange-500 rounded-full"><span>Subscribe Now</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}