import { useLocation } from "react-router";
import useFetchFunction from "../../fetch/useFetchFunction";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import "./NewsPage.css";

const NewsPageComponent = () => {
    const location = useLocation();
    const { title, q } = location.state;

    // console.log(title);
    const quary = q || "science";
    const url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=2cea5e58b869495cb8b60de7506e914f&pageSize=25&page=1&category=${quary}`;
    const { data, isPending, error } = useFetchFunction(url);

    return (
        <>
            {isPending && <LoadingComponent />}
            {error && <div>{error}</div>}
            {data && (
                <div className="body-background">
                    <div className="my-background-for-h2 py-3 pl-10  text-3xl sm:text-3xl text-gray-200 font-semibold">{title} </div>

                    <div className="py-10 px-5 sm:px-10 ">
                        {data.articles.map((article) => {
                            const {
                                description,
                                author,
                                urlToImage,
                                url,
                                title,
                                source,
                                content,
                                publishedAt,
                            } = article;
                            var d = new Date(publishedAt).toDateString();

                            return (
                                <div key={url} className="pb-5">
                                    <div className=" w-full lg:max-w-full lg:flex rounded my-hover">
                                        <div className="my-image h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t
                     lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                            style={{
                                                backgroundImage: "url(" + `${urlToImage}` + ")",
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                            title={title}>
                                        </div>
                                        <div className=" bg-white rounded-b 
                    lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8 w-full">
                                                <p className="text-sm text-gray-600 flex items-center">
                                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                    </svg>
                                                    {source.name}
                                                </p>
                                                <div className="text-gray-900 font-bold text-xl lg:text-2xl mb-2">{title}</div>
                                                <p className="text-gray-700 text-base lg:text-lg ">
                                                    {description}
                                                </p>
                                                <p className="pt-3">
                                                    {content}
                                                </p>
                                            </div>
                                            <div className="flex items-center grid grid-cols-2">
                                                <div className="text-sm">
                                                    <p className="text-gray-900 leading-none">{author}</p>
                                                    <p className="text-gray-600">{d}</p>
                                                </div>
                                                <div className="text-sm my-link text-right"> <a href={url}>Read More..</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>
            )}
        </>);
}

export default NewsPageComponent;