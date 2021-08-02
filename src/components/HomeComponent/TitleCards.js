import "./Header.css";

const TitleCards = () => {
    return (<>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">

            

            <div className="rounded overflow-hidden shadow-lg news-card">
                <div className="h-4/5  overflow-hidden">
                <img className="w-full h-auto" src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />

                </div>
                <div className="px-3  card-title py-0 rounded">
                    <div className=" text-gray-200  font-bold text-2xl mb-3 text-left">General</div>
                </div>
                {/* <div className="px-6 pt-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                </div> */}
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <div className="h-4/5  overflow-hidden">
                <img className="w-full h-auto" src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />

                </div>
                <div className="px-3  card-title py-0 rounded">
                    <div className=" text-gray-200  font-bold text-2xl mb-3 text-left">Sports</div>
                </div>
                {/* <div className="px-6 pt-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                </div> */}
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <div className="h-4/5  overflow-hidden">
                <img className="w-full h-auto" src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />

                </div>
                <div className="px-3  card-title py-0 rounded">
                    <div className=" text-gray-200  font-bold text-2xl mb-3 text-left">Technology</div>
                </div>
                {/* <div className="px-6 pt-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                </div> */}
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <div className="h-4/5  overflow-hidden">
                <img className="w-full h-auto" src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />

                </div>
                <div className="px-3  card-title py-0 rounded">
                    <div className=" text-gray-200  font-bold text-2xl mb-3 text-left">Business</div>
                </div>
                {/* <div className="px-6 pt-1 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                </div> */}
            </div>
       


        </div>


    </>);
}

export default TitleCards;