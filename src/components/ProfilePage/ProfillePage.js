import "./ProfilePage.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingComponent from "../LoadingComponent/LoadingComponent";


const ProfilePage = () => {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="myImage">
                <LoadingComponent />
            </div>
        )
    } else {
        const { name, picture, email, nickname, email_verified } = user;

        return (
            <>
                <div className="flex items-center justify-center w-full py-20  myImage ">
                    <div className="bg-white dark:bg-gray-800 shadow rounded pt-10  px-10 xl:px-0">
                        <div className="relative ">
                            <div className=" inset-0 m-auto w-32 h-32 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                                <img alt="p" className="w-full h-full overflow-hidden object-cover rounded" src={picture} />
                            </div>
                        </div>
                        <div className="px-5 xl:px-10 pb-10">
                            <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                                <div className="flex items-center">
                                    <svg className="w-4 mr-1 text-yellow-700 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                    </svg>
                                    <svg className="w-4 mr-1 text-yellow-600 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                    </svg>
                                    <svg className="w-4 mr-1 text-yellow-500 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                    </svg>
                                    <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                    </svg>
                                    <svg className="w-4 text-gray-300 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                                <div className="xl:pr-16 w-full ">
                                    <div className="text-center xl:text-left mb-3  flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                                        <h2 className="mb-3 xl:mb-0 xl:mr-4 text-xl lg:text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">{name}</h2>
                                        <div className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">Pro</div>
                                    </div>
                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 
                                dark:text-gray-400 leading-5">{nickname}</p>

                                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 
                                dark:text-gray-400 leading-5 ">{email}</p>
                                </div>
                                {/* <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">82</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Reviews</p>
                                </div>
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">28</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Projects</p>
                                </div>
                                <div>
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">42</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Approved</p>
                                </div>
                            </div> */}

                                <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6 pt-5">
                                    <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                                        {/* <div className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">Remote</div> */}

                                        {email_verified && (
                                            <div className="ml-0 rounded-full bg-green-400 text-green-1000 text-sm px-6 py-2 flex justify-center items-center">
                                                Verified
                                            </div>
                                        )}
                                        {!email_verified && (
                                            <div className="ml-0 rounded-full bg-red-400 text-green-1000 text-sm px-6 py-2 flex justify-center items-center">
                                                Not Verified
                                            </div>
                                        )}

                                    </div>
                                    {/* <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">Message</button> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>











            </>
        );
    }
}

export default ProfilePage;