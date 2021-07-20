const ProfilePage = () => {
    return (
        <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-6 flex items-start justify-center">
                <div className="w-full">

                    <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
                        <div className="w-full lg:w-3/3 px-12 flex flex-col items-center py-10">
                            <div className="w-24 h-24 mb-3 p-1 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="avatar" />
                            </div>
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



    //     <div className="mx-auto container px-4 xl:px-0 py-10 xl:py-40">
    //     <div className>
    //         <div className="flex flex-wrap items-center">
    //             <div className="lg:w-2/5 w-full ">
    //                 <img className="w-full" src="https://cdn.tuk.dev/assets/templates/prodify/solution.png" alt srcSet />
    //             </div>
    //             <div className="lg:w-3/5 w-full">
    //                 <div className="lg:pl-8 py-2 text-color">
    //                     <h1 className="text-3xl xl:text-6xl leading-snug f-f-l font-black">Gather data to offer a bespoke solution</h1>
    //                     <h2 className="text-xl lg:text-3xl leading-7 lg:leading-10 f-f-r py-4 lg:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
    //                     <div className="flex items-center">
    //                         <div className="flex items-center justify-center rounded-full w-16 h-16">
    //                             <img src="https://cdn.tuk.dev/assets/templates/prodify/profile.png" alt />
    //                         </div>
    //                         <div className="pl-3">
    //                             <h3 className="f-f-l text-xl lg:text-3xl">Rachel Dawson</h3>
    //                             <h4 className="f-f-r text-lg pt-2">CEO, Globex Workspaces</h4>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    );
}

export default ProfilePage;