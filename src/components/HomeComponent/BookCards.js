import useFetchFunction from "../../fetch/useFetchFunction";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import BookDetailsModal from "../AllBooksPage/OneBookPopUpComponent";

const Bookcards = () => {
    var books;
    const { data, isPending, error } = useFetchFunction(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BOOKS_API_KEY}`);
    data && (books = data.results.books.slice(0, 5));
    return (<>
        <div>

            {isPending && <LoadingComponent />}
            {error && <div>{error}</div>}
            {data && (<div>
                <section
                    className="grid grid-cols-2 gap-2 px-3 sm:gap-3 px-5 sm:px-10
              sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 xl:gap-4 md:gap-4
              "  >
                    {books.map((book) => {
                        const {
                            book_image,
                            primary_isbn10,
                            title,
                        } = book;
                        return (
                            <div key={primary_isbn10}
                                className="bg-gray-100 px-0 py-0 pb-2 sm:pb-5 rounded-lg my-bookView"  >
                                <div >
                                    <img
                                        src={book_image}
                                        alt={title}
                                        className="block mx-auto w-full"
                                    />
                                </div>
                                <BookDetailsModal book={book}/>
                 
                            </div>
                        );
                    }
                    )}
                </section>

            </div>)}

        </div>
    </>);
}

export default Bookcards;