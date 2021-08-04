import "./Bookspage.css";
import BookDetailsModal from "./OneBoolPopUpComponent";

const GoogleBookSearchComponent = (props) => {
  console.log(props.data);
  const data = props.data;

  if (data.items) {
    return (
      <>
        {data && (
          <div>
            <section
              className="grid grid-cols-2 gap-3 px-3 sm:gap-5 sm:px-5 pb-20 pt-5
    sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-8
    "  >
              {data.items.map((book) => {
                const src = book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`;
                const {
                  id,
                  volumeInfo,
                } = book;
                return (
                  <div key={id}
                    className="bg-gray-100 px-0 py-0 pb-2 sm:pb-5 rounded-lg my-bookView"  >

                    <div >
                      <img
                        src={src}
                        alt={volumeInfo.title}
                        className="block mx-auto w-full"
                      />
                    </div>
                    <BookDetailsModal book={book}>
                    </BookDetailsModal>
                  </div>
                );
              })}
            </section>
          </div>
        )}
      </>
    );

  } else {
    return (
      <>
        {data && (
          <div>
            <section
              className="grid grid-cols-2 gap-3 px-3 xl:px-10 sm:gap-5 sm:px-5 pb-20 pt-5
              sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-5
              "  >
              {data.results.books.map((book) => {
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
                    <BookDetailsModal book={book}>
                    </BookDetailsModal>
                  </div>
                );
              }
              )}
            </section>
          </div>
        )}
      </>
    )
  }
}

export default GoogleBookSearchComponent;