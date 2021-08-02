import "./Header.css";
import { Link } from "react-router-dom";
const TitleCards = () => {
    return (<>
        <div className="p-1 pt-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "General",
                        q: "general"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">General</div>
                    </div>
                </Link>
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "Sports",
                        q: "sports"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">Sports</div>
                    </div>
                </Link>
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "Technology",
                        q: "technology"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">Technology</div>
                    </div>
                </Link>
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "Science",
                        q: "science"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/248152/pexels-photo-248152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">Science</div>
                    </div>
                </Link>
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "Entertainment",
                        q: "entertainment"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">Entertainment</div>
                    </div>
                </Link>
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "Health",
                        q: "health"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">Health</div>
                    </div>
                </Link>
            </div>

            <div className="rounded overflow-hidden shadow-lg news-card">
                <Link to={{
                    pathname: "/news",
                    state: {
                        title: "Business",
                        q: "business"
                    },
                }}>
                    <div className="h-4/5  overflow-hidden">
                        <img className="w-full h-auto" src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Forest" />
                    </div>
                    <div className="px-3  card-title py-0 rounded">
                        <div className=" text-gray-200  font-semibold text-2xl mb-3 text-left">Business</div>
                    </div>
                </Link>
            </div>





        </div>
    </>);
}

export default TitleCards;