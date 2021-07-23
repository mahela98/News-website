import { useState } from "react";
import { Link } from "react-router-dom";
import BooksPage from "./BooksPage";
const BookSearchBar = () => {
    const [q, setQ] = useState("");

    const submit = (e) => {
        e.preventDefault()
        // props.handleSubmit()

        console.log(q)

    }

    return (
        <div className="shadow-2xl  pb-5 sm:pb-0 bookstitle grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <h1 className=" font-bold text-center ml-5 text-2xl pt-5 sm:pb-5 sm:text-left">BOOKS</h1>
            <div>
                <div className="shadow flex pt-5 mr-5 ml-5">
                    <input
                        onChange={e => setQ(e.target.value)}
                        className="my-input w-full rounded p-2" type="text" placeholder="Search..." />
                    <Link to="/books" params={{ q: { q } }}>
                        <button onClick={submit} className=" my-btn rounded bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                            <i className="material-icons">search</i>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default BookSearchBar;