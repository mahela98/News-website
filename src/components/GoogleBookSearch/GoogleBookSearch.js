import useFetchFunction from "../../fetch/useFetchFunction";
import { Link } from "react-router-dom";
import BookSearchBar from "../AllBooksPage/BookSearchBar";
const GoogleBookSearch = () => {

    var url = `https://www.googleapis.com/books/v1/volumes?q=THE PAPER PALACE&orderBy=relevance&key=AIzaSyAxuX41zCdY1lL6jpZPSZodtP6ItpH46gk&maxResults=15&projection=full&printType=books`;
    const { data, isPending, error } = useFetchFunction(url);


    return (<div className="bookspageBody">
        <BookSearchBar />

        {isPending && <div>is pending</div>}
        {error && <div>{error}</div>}

        {data && (
            <div>
                <section
                    className="grid grid-cols-2 gap-3 px-3 sm:gap-5 sm:px-5 pb-20 pt-5
    sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8
    "  >
                    {data.items.map((book) => {
                         
                           const src=book.volumeInfo.imageLinks === undefined ? "": `${book.volumeInfo.imageLinks.thumbnail}`;
                        // console.log(src)
                       const {
                            id,
                            saleInfo,
                            retailPrice,
                            searchInfo,
                            description,
                            volumeInfo,
                           
                        } = book;
                      
                        // {console.log(imageLinks.smallThumbnail)}
                        return (
                            <div key={id}
                                className="bg-gray-100 px-0 py-0 pb-2 sm:pb-5 rounded-lg my-bookView"  >
                                <Link to={{
                                    pathname: '/BookDetailsPage',
                                    state: { book }
                                }}
                                >
                                    <div >
                                        <img
                                             src={src}
                                            alt={volumeInfo.title}
                                            className="block mx-auto w-full"
                                        />
                                    </div>
                                </Link>
                                <Link to={{
                                    pathname: '/BookDetailsPage',
                                    state: { book }
                                }}
                                >
                                    <div className="px-2 sm:px-4 text-left">
                                        <h3 className=" font-bold my-2 text-1xl sm:text-1xl">{volumeInfo.title} </h3>
                                        <p>
                                            <span className="font-bold">By  </span>
                                            {volumeInfo.authors}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </section>
            </div>
        )}
    </div>);
}

export default GoogleBookSearch;