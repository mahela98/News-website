import "./NewsPage.css";

const NewsPageComponent = () => {
    return (<>
        <div className="body-background">
            <div className="py-10 px-5 sm:px-10 ">




                <div className="pb-5">
                    <div className=" w-full lg:max-w-full lg:flex rounded my-hover">
                        <div className="my-image h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t
                     lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            title="Mountain">
                        </div>
                        <div className=" bg-white rounded-b 
                    lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8 w-full">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Members only
                                </p>
                                <div className="text-gray-900 font-bold text-xl lg:text-2xl mb-2">Best Mountain Trails 2020</div>
                                <p className="text-gray-700 text-base lg:text-lg ">Birds' nests are snug little places: safe, warm, and lined with soft materials to keep the vulnerable babies comfortable and protected.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">John Smith</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




              





            </div>




        </div>



    </>);
}

export default NewsPageComponent;