import React from "react";

export default function Services() {
  return (
    <section className="box-border services pt-16 pb-24 bg-white">
      <div className="  container max-w-7xl mx-auto">
        <h2 className="text-4xl mb-8 font-sans font-semibold">
          How We Can <span className="text-orange-500">Help You</span>
        </h2>
        <div className="flex flex-col sm:flex-row">
          <div className=" flex flex-col divide-y-4 divide-gray-c mr-8">
            <h4 className="mb-6 mt-3 text-2xl font-semibold">IT Services</h4>
            <div className="flex px-8 py-8 justify-between  ">
              <div className=" w-1/3">
                <div className="image flex w-10 h-10">
                  <img
                    src="https://itsulu-react.netlify.app/img/icons/md/1.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="text w-3/4">
                <h5 className="pb-7  font-semibold">Dedicated team</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ad, veniam deserunt illum quam maxime ea, voluptates
                  perferendis cum architecto iure.
                </p>
              </div>
            </div>
            <div className="flex px-8 py-8 justify-between  ">
              <div className=" w-1/3">
                <div className="image flex w-10 h-10">
                  <img
                    src="https://itsulu-react.netlify.app/img/icons/md/2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="text w-3/4">
                <h5 className="pb-7 font-semibold">QA And Testing</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ad, veniam deserunt illum quam maxime ea, voluptates
                  perferendis cum architecto iure.
                </p>
              </div>
            </div>
            <div className="flex px-8 py-8 justify-between  ">
              <div className=" w-1/3">
                <div className="image flex w-10 h-10">
                  <img
                    src="https://itsulu-react.netlify.app/img/icons/md/3.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="text w-3/4">
                <h5 className="pb-7 font-semibold">SaaS</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ad, veniam deserunt illum quam maxime ea, voluptates
                  perferendis cum architecto iure.
                </p>
              </div>
            </div>



          </div>
          <div className=" flex flex-col divide-y-2 divide-gray-c ">
            <h4 className="mb-6 mt-3 text-2xl font-semibold">IT Solutions</h4>
            <div className="flex px-8 py-8 justify-between  ">
              <div className=" w-1/3">
                <div className="image flex w-10 h-10">
                  <img
                    src="https://itsulu-react.netlify.app/img/icons/md/4.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="text w-3/4">
                <h5 className="pb-7 font-semibold">Blockchain</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ad, veniam deserunt illum quam maxime ea, voluptates
                  perferendis cum architecto iure.
                </p>
              </div>
            </div>
            <div className="flex px-8 py-8 justify-between  ">
              <div className=" w-1/3">
                <div className="image flex w-10 h-10">
                  <img
                    src=" https://itsulu-react.netlify.app/img/icons/md/5.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="text w-3/4">
                <h5 className="pb-7 font-semibold">Artificial Intelligence</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ad, veniam deserunt illum quam maxime ea, voluptates
                  perferendis cum architecto iure.
                </p>
              </div>
            </div>
            <div className="flex px-8 py-8 justify-between  ">
              <div className=" w-1/3">
                <div className="image flex w-10 h-10">
                  <img
                    src="https://itsulu-react.netlify.app/img/icons/md/6.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="text w-3/4">
                <h5 className="pb-7 font-semibold">Internet of Things</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ad, veniam deserunt illum quam maxime ea, voluptates
                  perferendis cum architecto iure.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
