import { Link } from "react-router-dom";
const InfoPage = ({data}) => {
   
    const {
        original_title,
        overview,
        release_date,
        vote_average,
        id,
        popularity,
        poster_path,
        vote_count,
        backdrop_path,
    } = data;
    const movie_image = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const movie_Bc_Image = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    return (
        <>
       
       

       <div className="inline-block pt-0 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
                                    <div className="bg-white px-0 pt-0 pb-0 sm:p-0 sm:pb-0">
                                        <div className="sm:flex sm:items-start">
                                            {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div> */}
                                            <div className="px-0 text-left sm:mt-0 sm:ml-0 pt-0 sm:text-left">
                                                {/* <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {title}
                    </Dialog.Title> */}
                                                <div className="mt-0">
                                                    <div
                                                        className="my-outline book-details-body pb-0 px-5 pt-2 sm:pt-5 sm:px-10 flex flex-row-reverse"
                                                    >
                                                  
                                                    </div>
                                                    <>
                                                        <section className="book-details-body body-font overflow-hidden" >
                                                            <div className="container px-5 py-0 pt-5 sm:pt-5 mx-auto ">
                                                                <div className=" sm:w-4/5 mx-auto flex flex-wrap content-center my-boder">
                                                                    <img alt="ecommerce" className="w-4/5 pl-20 sm:pl-0 sm:w-1/2 xl:w-1/3 
                                                                     lg:h-auto h-full object-cover  object-center rounded" src={movie_image} />
                                                                    <div className="lg:w-1/2 w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0">
                                                                        <h1 className="my-title-text text-3xl title-font font-medium mb-1">{original_title}</h1>
                                                                        {/* <h2 className="text-sm title-font text-white-500 tracking-widest text-lg">Author- { || "Anonymous"}</h2> */}

                                                                        <div className="flex mb-4">
                                                                            <span className="flex items-center">
                                                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                                </svg>
                                                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                                </svg>
                                                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                                </svg>
                                                                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                                </svg>
                                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                                                </svg>
                                                                                {/* <span className="text-gray-200 ml-3">Rank <strong>{rank || "None"}</strong> </span> */}
                                                                            </span>
                                                                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                                                                <div>Rate <strong>{vote_average}</strong> </div>
                                                                            </span>
                                                                        </div>

                                                                        <div className="flex py-3 px-5 sm:px-0">
                                                                            <span className="title-font font-medium text-xl text-gray-200 my-title-text">Votes: {vote_count}</span>
                                                                        </div>

                                                                        <p className="leading-relaxed">{overview}</p>
                                                                        <h2 className="text-sm title-font text-gray-300 tracking-widest pt-5 ">Release Date: {release_date} </h2>
                                                                        <h2 className="text-sm title-font text-gray-300 tracking-widest pt-5 ">
                                                                            <Link to={{
                                                                                pathname: "/movieinfo",
                                                                                state: {
                                                                                    id: id,
                                                                                },
                                                                            }}>More Info.. </Link>
                                                                        </h2>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="book-details-body bg-gray-50 px-0 py-0 sm:px-0 flex sm:flex-row-reverse">

                           
                                    </div>
                                </div>




        </>
      );
}
 
export default InfoPage;