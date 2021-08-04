import "./Titlebar.css";


const Titlebar = ({ pageTitle }) => {
    return (
        <>
            <div className="grid grid-cols-12 my-background-for-h2 py-2 sm:py-3 px-5 sm:pl-10" >

                <div className="   col-start-1 col-end-7
                     text-2xl sm:text-2xl text-gray-200 font-semibold">{pageTitle} </div>



            </div>
        </>
    );
}

export default Titlebar;