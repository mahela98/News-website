import "./ProfilePage.css";
const ProfilePage = () => {

    return (
        <>
            <div className="rounded relative mt-0 h-48">
                <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="w-full h-full object-cover  absolute shadow" />
                <div className="absolute  top-0 right-0 bottom-0 left-0  myImage" />
                <div className="w-32 h-32 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                </div>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-900 py-0">
                <div className="container mx-auto px-6 flex items-start justify-center">
                    <div className="w-full">

                        <div className="flex flex-col lg:flex-row mt-5 mb-5 mx-auto bg-white dark:bg-gray-800 shadow rounded">
                            <div className="w-full lg:w-3/3 px-12 flex flex-col items-center py-10">

                                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">Timothy Jon Oliphant</h2>
                                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                                    <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={11} r={3} />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    </span>
                                    Las Vegas, Nevada
                                </p>
                                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">The more I deal with the work as something that is my own, as something that is personal, the more successful it is.</p>
                                <div className="flex items-start">

                                    <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                                        <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">28</h2>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Projects</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;