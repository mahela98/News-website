import { Link } from "react-router-dom";
import "./Titlebar.css";


const Titlebar = ({ pageTitle }) => {
  return (
    <>
      <ul className="relative  grid grid-cols-4 gap-x-0 sm:gap-x-0 sm:gap-y-0 md:grid-cols-5 lg:grid-cols-7 mx-0">
        <li className=" w-full">
          <Link to={{
            pathname: "/news",
            state: {
              title: "General",
              q: "general"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold"
    
    >General</Link>
        </li>
        <li className="mr-1 w-full">
          <Link to={{
            pathname: "/news",
            state: {
              title: "Sports",
              q: "sports"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold " href="#">Sports</Link>
        </li>
        <li className="mr-1 w-full">
          <Link to={{
            pathname: "/news",
            state: {
              title: "Technology",
              q: "technology"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold" href="#">Technology</Link>
        </li>
        <li className="mr-1 w-full">
          <Link to={{
            pathname: "/news",
            state: {
              title: "Science",
              q: "science"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold" href="#">Science</Link>
        </li>
        <li className="mr-1 w-full col-span-2 sm:col-span-1">
          <Link to={{
            pathname: "/news",
            state: {
              title: "Entertainment",
              q: "entertainment"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold " href="#">Entertainment</Link>
        </li>
        <li className="mr-1 w-full">
          <Link to={{
            pathname: "/news",
            state: {
              title: "Health",
              q: "health"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold" href="#">Health</Link>
        </li>
        <li className="mr-1 w-full">
          <Link to={{
            pathname: "/news",
            state: {
              title: "Business",
              q: "business"
            },
          }} className="bg-titlebar inline-block py-2 text-center w-full
    text-blue-500 hover:text-blue-800 font-semibold" href="#">Business</Link>
        </li>
      </ul>






    </>
  );
}

export default Titlebar;