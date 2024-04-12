import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="box-border pt-16 pb-24 bg-white">
      <div className=" container mx-auto max-w-7xl ">
        <h2 className="text-4xl mb-8 font-sans font-semibold">
          How We Can <span className="text-orange-500">Help You</span>
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className=" flex flex-col divide-y-4 divide-gray-c md:mr-8">
            <h4 className="mb-16 mt-3 text-2xl font-semibold">IT Services</h4>
            <ServiceCard heading={"Dedicated team"}
              src={"https://itsulu-react.netlify.app/img/icons/md/1.svg"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugitad, veniam deserunt illum quam maxime ea, voluptates perferendis cum architecto iure."
            />
            <ServiceCard heading={"QA And Testing"}
              src={"https://itsulu-react.netlify.app/img/icons/md/2.svg"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugitad, veniam deserunt illum quam maxime ea, voluptates perferendis cum architecto iure."
            />
            <ServiceCard heading={"SaaS"}
              src={"https://itsulu-react.netlify.app/img/icons/md/3.svg"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugitad, veniam deserunt illum quam maxime ea, voluptates perferendis cum architecto iure."
            />
          </div>
          <div className=" flex flex-col divide-y-4 divide-gray-c">
            <h4 className="mb-16 mt-3 text-2xl font-semibold">IT Solutions</h4>
            <ServiceCard heading={"Blockchain"}
              src={"https://itsulu-react.netlify.app/img/icons/md/4.svg"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugitad, veniam deserunt illum quam maxime ea, voluptates perferendis cum architecto iure."
            />
            <ServiceCard heading={"Artificial Intelligence"}
              src={"https://itsulu-react.netlify.app/img/icons/md/5.svg"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugitad, veniam deserunt illum quam maxime ea, voluptates perferendis cum architecto iure."
            />
            <ServiceCard heading={"Internet of Things"}
              src="https://itsulu-react.netlify.app/img/icons/md/6.svg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugitad, veniam deserunt illum quam maxime ea, voluptates perferendis cum architecto iure."
            />
          </div>

        </div>
      </div>
    </section >
  );
}
