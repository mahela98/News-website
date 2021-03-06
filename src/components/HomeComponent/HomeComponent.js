import { Link } from "react-router-dom";
import Bookcards from "./BookCards";
import HomePageHeader from "./HomePageHeader";
import MovieCards from "./MovieCards";
import TitleCards from "./TitleCards";


const HomeComponent = () => {
    return (
        <>
            <div className="body-background">
                <HomePageHeader />

                <div className="my-background-for-h2 mt-10 px-10 py-2 text-3xl sm:text-3xl text-gray-200 font-semibold">News </div>
                <TitleCards />

                <div className="grid grid-cols-2 gap-0 pb-10" >
                    <div className="my-background-for-h2 mt-10 px-10 py-2 text-3xl sm:text-3xl text-gray-200
 font-semibold"><p className=""> Books</p>    </div>
                    <div className="my-background-for-h2 mt-10 px-10 pt-4  text-sm text-right
 text-gray-200 font-semibold"><p >
                            <Link to="/books" className="link-hover"> View All</Link>
                        </p></div>
                </div>

                <Bookcards />

                <div className="grid grid-cols-2 gap-0 pb-10" >
                    <div className="my-background-for-h2 mt-10 px-10 py-2 text-3xl sm:text-3xl
        text-gray-200 font-semibold"><p > Movies</p></div>
                    <div className="my-background-for-h2 mt-10 px-10 pt-4  text-sm text-right
        text-gray-200 font-semibold"> <p >
                            <Link to="/movie" className="link-hover"> View All</Link>
                        </p></div>
                </div>
                <MovieCards />
            </div>

        </>);
}

export default HomeComponent;