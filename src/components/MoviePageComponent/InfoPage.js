import "./InfoPage.css"
import YoutubeEmbeded from "./YoutubeEmbeded";
const InfoPage = ({ data }) => {
    try {
        
    const {
        original_title,
        overview,
        release_date,
        vote_average,
        id,
        status,
        popularity,
        poster_path,
        vote_count,
        backdrop_path,
        belongs_to_collection,
        tagline,
    } = data;
    const movie_image = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const movie_Bc_Image = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    return (
        <>
            <section className=" body-font overflow-hidden"
                style={{
                    backgroundImage: `url("${movie_Bc_Image}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="my-bg-infopage ">
                    <div className="container px-0 py-0 pt-5 sm:pt-10 mx-auto pb-20">
                        <div className=" sm:w-4/5 mx-auto flex flex-wrap content-center my-boder rounded my-box-inside">
                            <img alt={id} className="w-4/5 pl-20 sm:pl-0 sm:w-1/2 xl:w-1/3 
            lg:h-auto h-full object-cover  object-center rounded" src={movie_image} />
                            <div className="lg:w-1/2 w-full lg:pl-10  lg:py-0 mt-3 lg:mt-0 pb-5">
                                <h1 className="my-title-text text-xl sm:text-2xl md:text-3xl title-font font-medium mb-1">{original_title}</h1>

                                <div className="flex mb-0 ">
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
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <div>Rate <strong>{vote_average}</strong> </div>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">Votes: {vote_count}</span>

                                </div>

                                <div className="flex pb-3 ">
                                </div>

                                <p className="leading-relaxed text-sm sm:text-lg ">{overview}</p>
                                <p className="text-sm title-font text-gray-200 tracking-widest pt-5 "> {tagline} </p>

                                {release_date && (<p className="text-sm title-font text-gray-200 tracking-widest pt-5 ">Release Date: {release_date} </p>
                                )}
                                {belongs_to_collection && (<p className="text-sm title-font text-gray-200 tracking-widest pt-1">Collection: {belongs_to_collection.name}</p>
                                )}
                                {popularity && (<p className="text-sm title-font text-gray-200 tracking-widest pt-1">Popularity: {popularity}</p>
                                )}
                                {status && (<p className="text-sm title-font text-green-500 tracking-widest pt-1">Status: {status}</p>
                                )}
                            </div>
                        </div>
                        <div className="pt-5 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 items-center">
                            
                        <YoutubeEmbeded/><YoutubeEmbeded/><YoutubeEmbeded/>
                       

                            </div>

                    </div>
                </div>
            </section>
        </>
    );
    } catch (error) {
        console.log(error);
    }
}

export default InfoPage;