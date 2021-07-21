import { useLocation } from "react-router";
import  { Redirect } from 'react-router-dom';

const BookDetailsPage = () => {
  const location = useLocation();

  try {
    const { book } = location.state;
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
      <div>
        <h2>{author}</h2>
      </div>
    );
  } catch (error) {
    return (
        <Redirect to='/'  />
    );
  }
};

export default BookDetailsPage;
