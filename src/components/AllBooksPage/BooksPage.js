import React from 'react';
import GoogleBookSearch from "./GoogleBookSearchComponent";
import NYTBooksComponent from "./NYTBooksComponent";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchFunction from "../../fetch/useFetchFunction";


const BooksPage = () => {
    const [q, setQ] = useState("");
    const [url, setUrl] = useState(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BOOKS_API_KEY}`)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (q != "") {
            setUrl(`https://www.googleapis.com/books/v1/volumes?q=${q}&orderBy=relevance&zoom=0&key=AIzaSyAxuX41zCdY1lL6jpZPSZodtP6ItpH46gk&maxResults=15&projection=full&printType=books`);
        }
        else if(q==""){
            setUrl(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BOOKS_API_KEY}`);
        }

    }
    const { data, isPending, error } = useFetchFunction(url);
    return (
        <>
            <div className="bookspageBody">
                <div className="shadow-2xl  pb-5 sm:pb-0 bookstitle grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <h1 className=" font-bold text-center ml-5 text-2xl pt-5 sm:pb-5 sm:text-left">BOOKS</h1>
                    <div>
                        <div className="shadow grid pt-5 mr-5 ml-5">
                            <form onSubmit={handleSubmit} className="grid grid-cols-2">
                                <input
                                    onChange={e => setQ(e.target.value)}
                                    // onChange={() => setClicked(false)}
                                    value={q}
                                    className="my-input w-full rounded p-2" type="text" placeholder="Search..." />
                                {/* <Link to="/books" params={{ q: { q } }}> */}

                                <button
                                    type="submit"
                                    className=" my-btn rounded bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                                    <i className='material-icons'>search</i>
                                </button>

                            </form>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>

                <div>


                {isPending && <div>is pending</div>}
            {error && <div>{error}</div>}

            {data && <GoogleBookSearch data={data} />}



                    {/* {clicked==false && (<NYTBooksComponent />)}
        {clicked==true && !q==="" && (<GoogleBookSearch q={q}/>)}
        {clicked==true && q==="" && (<NYTBooksComponent />)} */}
                    {/* {clicked==false && !q=="" && (<NYTBooksComponent />)} */}

                    {/* <GoogleBookSearch q={q} /> */}




                </div>

            </div>
        </>
    );
}

export default BooksPage;