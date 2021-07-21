import useFetchFunction from "../../fetch/useFetchFunction";
import "./Bookspage.css";
import { Link } from "react-router-dom";
const BooksPage = () => {
  const { data, isPending, error } = useFetchFunction(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BOOKS_API_KEY}`
  );

  return (
    <div className="myImage">
      <div className="pb-5 sm:pb-0 bookstitle grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <h1 className=" font-bold text-center ml-5 text-2xl pt-5 sm:pb-5 sm:text-left">BOOKS</h1>
        <div>
          <div className="shadow flex pt-5 mr-5 ml-5">
            <input className="w-full rounded p-2" type="text" placeholder="Search..." />
            <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>

      </div>

      {isPending && <div>is pending</div>}
      {error && <div>{error}</div>}

      {data && (
        <div>


          <section
            className="grid grid-cols-1 gap-10 px-5 pb-20
      sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      "
          >
            {data.results.books.map((book) => {
              const {
                author,
                book_image,
                // buy_links,
                // description,
                // price,
                primary_isbn10,
                publisher,
                rank,
                title,
              } = book;

              return (
                <div
                  key={rank}
                  className="bg-gray-100 px-10 py-5 rounded-lg sm:px-5"
                >
                  <div>
                    <img
                      src={book_image}
                      alt={title}
                      className="block mx-auto w-3/4"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold my-2 text-1xl">{title}</h3>
                    {/* <p className="mb-4">{description}</p> */}
                    <Link to={{
                      pathname: '/BookDetailsPage',
                      state: { book }
                    }}> link</Link>
                    <p>
                      <span className="font-bold">Author: </span>
                      {author}
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span className="font-bold">Publisher: </span>
                        {publisher}
                      </li>

                      <li>
                        <span className="font-bold">ISBN: </span>
                        {primary_isbn10}
                      </li>
                    </ul>
                  </div>
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
