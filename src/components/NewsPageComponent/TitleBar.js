const Titlebar = ({pageTitle}) => {
    return ( 
        <>
         <div className="my-background-for-h2 py-2 sm:py-3 pl-5 sm:pl-10 
                     text-2xl sm:text-2xl text-gray-200 font-semibold">{pageTitle} </div>
        </>
     );
}
 
export default Titlebar;