import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <>
            <div className=" bg-linear pb-12">
                <div className="mx-auto container pt-0 sm:pt-12 flex flex-col items-center justify-center">
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3 text-center">
                        <h1 className="text-2xl font-black color">News Web</h1>
                        <div className="my-6 text-base ">
                            <ul className="md:flex items-center color">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Pricing</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Careers</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm color mb-10 f-f-l">
                            <p> © 2020 dev. All rights reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                </div>
            </div>
        </>
    );
}

export default Footer;
