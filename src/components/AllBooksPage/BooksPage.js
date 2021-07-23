import useFetchFunction from "../../fetch/useFetchFunction";
import "./Bookspage.css";
import { Link } from "react-router-dom";
import BookSearchBar from "./BookSearchBar";


const BooksPage = () => {

  var url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BOOKS_API_KEY}`;
  //  var url = `https://www.googleapis.com/books/v1/volumes?q=THE PAPER PALACE&orderBy=relevance&key=AIzaSyAxuX41zCdY1lL6jpZPSZodtP6ItpH46gk&maxResults=15&projection=full&printType=books`;

  const { data, isPending, error } = useFetchFunction(url);

  return (
    <div className="bookspageBody">
      <BookSearchBar />

      {isPending && <div>is pending</div>}
      {error && <div>{error}</div>}

      {data && (
        <div>
          <section
            className="grid grid-cols-2 gap-3 px-3 sm:gap-5 sm:px-5 pb-20 pt-5
      sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8
      "  >
            {data.results.books.map((book) => {
              const {
                author,
                book_image,
                // buy_links,
                // description,
                // price,
                primary_isbn10,
                // publisher,
                // primary_isbn13,
                // rank,
                title,
              } = book;

              return (
                <div key={primary_isbn10}
                  className="bg-gray-100 px-0 py-0 pb-2 sm:pb-5 rounded-lg my-bookView"  >
                  <Link to={{
                    pathname: '/BookDetailsPage',
                    state: { book }
                  }}
                  >
                    <div >
                      <img
                        src={book_image}
                        alt={title}
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
                      <h3 className=" font-bold my-2 text-1xl sm:text-1xl">{title} </h3>
                      <p>
                        <span className="font-bold">By  </span>
                        {author}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
