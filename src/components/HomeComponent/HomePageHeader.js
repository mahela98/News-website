import "./Header.css";
import TitleCards from "./TitleCards";

export default function HomePageHeader() {
    return (<>
        <div className="body-background">
            <div className="my-background">
                <div className="py-5 sm:py-10 lg:py-20  pb-12 bg-white my-background2 ">
                    <div className="max-w-7xl  ">
                        <div className="sm:text-center">
                            <h2 className="text-base  pt-4 pb-4 pl-5 lg:pl-10 home-header-title  tracking-wide uppercase text-3xl sm:text-4xl lg:text-5xl">News Web</h2>
                            <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-200 sm:text-4xl
              mx-auto px-4 sm:px-6 lg:px-8
              ">
                                A better way to Know the World ..
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <TitleCards />



            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {/* loop */}
                    <div className="relative">
                        <dt>

                            <p className=" text-lg leading-6 font-medium text-gray-900">Name</p>
                        </dt>
                        <dd className="mt-2  text-base text-gray-500">dis</dd>
                    </div>

                    <div className="relative">
                        <dt>

                            <p className=" text-lg leading-6 font-medium text-gray-900">Name</p>
                        </dt>
                        <dd className="mt-2  text-base text-gray-500">dis</dd>
                    </div>

                    <div className="relative">
                        <dt>

                            <p className=" text-lg leading-6 font-medium text-gray-900">Name</p>
                        </dt>
                        <dd className="mt-2  text-base text-gray-500">dis</dd>
                    </div>
                    {/* loop */}
                </dl>
            </div>
        </div>
    </>
    )
}
