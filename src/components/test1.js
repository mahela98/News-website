/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { Redirect } from 'react-router-dom';

export default function Example(props) {
  console.log(props.book)
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
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
    saleInfo,
    volumeInfo,
    id
  } = props.book;
try {
  
  return (
    <div>
      <button onClick={()=>setOpen(true)}>kjahsd</button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end 
         justify-center min-h-screen pt-20 px-5 pb-5 text-center sm:block sm:pt-30 lg-px-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block pt-0 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
              <div className="bg-white px-0 pt-0 pb-0 sm:p-0 sm:pb-0">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div> */}
                  <div className="px-0 text-center sm:mt-0 sm:ml-0 pt-0 sm:text-left">
                    {/* <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      {title}
                    </Dialog.Title> */}
                    <div className="mt-0">
                    




<>
        <section className="book-details-body body-font overflow-hidden">
          <div className="container px-5 py-10 lg:py-14 mx-auto ">
            <div className=" sm:w-4/5 mx-auto flex flex-wrap content-center my-boder">
              <img alt="ecommerce" className="w-4/5 pl-20 sm:pl-0 sm:w-1/2 xl:w-1/3  lg:h-auto h-full object-cover  object-center rounded" src={book_image || `https://books.google.com/books?id=${id}&printsec=frontcover&img=1&zoom=4&source=gbs_api`} />
              <div className="lg:w-1/2 w-full lg:pl-10  lg:py-6 mt-6 lg:mt-0">
                <h1 className="my-title-text text-3xl title-font font-medium mb-1">{title || volumeInfo.title}</h1>
                <h2 className="text-sm title-font text-white-500 tracking-widest text-lg">Author- {author || volumeInfo.authors || "Anonymous"}</h2>

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
                    <span className="text-gray-200 ml-3">Rank <strong>{rank || "None"}</strong> </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <div>Last Week Rank <strong>{rank_last_week || "None"}</strong> </div>
                  </span>
                </div>

                <div className="flex py-3 px-5 sm:px-0">
                  {
                    price && (<span className="title-font font-medium text-xl text-gray-200 my-title-text">Price : $ {price}</span>)
                  }
                  {!price &&
                    saleInfo.retailPrice && (<span className="title-font font-medium text-xl text-gray-200 my-title-text">Price : {saleInfo.retailPrice.amount && saleInfo.retailPrice.amount} {saleInfo.retailPrice.currencyCode && saleInfo.retailPrice.currencyCode} </span>
                    )
                  }
                </div>

                <p className="leading-relaxed">{description || volumeInfo.description}</p>
                <h2 className="text-sm title-font text-gray-300 tracking-widest pt-5 ">Published By {publisher || volumeInfo.publisher} Books.</h2>


{/* 
                <div className="mt-5">
                  <h4 className="mb-2 text-lgtitle-font font-medium mb-1">Buy Links</h4>
                  <ByLinksComponent buy_links = {buy_links || null} saleInfo = {saleInfo || null} />
                
                </div> */}

              </div>
            </div>
          </div>
        </section>









      </>







                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-0 py-0 sm:px-0 flex sm:flex-row-reverse">
         
                <button
                  type="button"
                  className="px-0 py-2 my-5 mx-5 sm:mr-5 sm:ml-5 lg:mx-10 w-full sm:w-1/3 inline-flex justify-center
                   rounded-md border border-gray-300 shadow-sm  bg-white text-base 
                   font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-indigo-500 sm:px-10 "
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
} catch (error) {
  { console.log(error) }
  return (
    <Redirect to='/' />
  );
}

}
