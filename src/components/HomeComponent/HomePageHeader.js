import "./Header.css";

export default function HomePageHeader() {
    return (<>
        <div className="my-background">
            <div className="py-5 sm:py-10 lg:py-20  pb-12  my-background2 ">
                <div className="max-w-full  ">
                    <div className="sm:text-center">
                        <h2 className="text-base  py-4 home-header-title
                              tracking-wide uppercase text-3xl sm:text-4xl lg:text-5xl pl-5 sm:pl-0 ">News Web</h2>
                        <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-200 sm:text-4xl
              mx-auto px-4 sm:px-6 lg:px-8
              "> A better way to Know the World ..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
