import { useLocation } from "react-router";
import { Redirect } from 'react-router-dom';
import "./BookDetailsPage.css";

const BookDetailsPage = () => {
  const location = useLocation();

  try {
    const { book } = location.state;
    const {
      author,
      book_image,
      buy_links,
      description,
      price,
      primary_isbn10,
      publisher,
      rank_last_week,
      rank,
      title,
    } = book;
    return (
      <>
        <section className="book-details-body body-font overflow-hidden">
          <div className="container px-5 py-10 lg:py-14 mx-auto ">
            <div className=" sm:w-4/5 mx-auto flex flex-wrap content-center my-boder">
              <img alt="ecommerce" className="w-4/5 pl-20 sm:pl-0 sm:w-1/2 xl:w-1/3  lg:h-auto h-full object-cover  object-center rounded" src={book_image} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="my-title-text text-3xl title-font font-medium mb-1">{title}</h1>
                <h2 className="text-sm title-font text-white-500 tracking-widest text-lg">Author- {author}</h2>

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
                    <span className="text-gray-200 ml-3">Rank <strong>{rank}</strong> </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <div>Last Week Rank <strong>{rank_last_week}</strong> </div>
                  </span>
                </div>

                
                <p className="leading-relaxed">{description}</p>
                <h2 className="text-sm title-font text-gray-300 tracking-widest pt-5 ">Published By {publisher} Books.</h2>

                {/* <div className="flex py-10 px-5 sm:px-0">
                  <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
                </div> */}

                <div className="mt-5">
                  <h4 className="mb-2 text-lgtitle-font font-medium mb-1">Buy Links</h4>
                  <ul className="pl-5 list-disc ">
                    {
                      buy_links.map((buy_link) =>
                        <li className="my-link" key={buy_link.url}> <a target="_blank" rel="noopener noreferrer" href={buy_link.url}> {buy_link.name}</a>   </li>
                      )
                    }
                  </ul>
                </div>



              </div>
            </div>
          </div>
        </section>









      </>
    );
  } catch (error) {
    return (
      <Redirect to='/' />
    );
  }
};

export default BookDetailsPage;
