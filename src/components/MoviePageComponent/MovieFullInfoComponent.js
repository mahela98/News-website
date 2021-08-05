import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import useFetchFunction from '../../fetch/useFetchFunction';
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import InfoPage from './InfoPage';

const MovieFullInfo = () => {
    const location = useLocation();
    var movieId = "";
    try {
        const { id } = location.state;
        // console.log(id);
        movieId = id;
    } catch (error) {
        console.log("No Id");
    }
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ed59011d6c46d7a33abf946104590345&language=en-US`;
    // console.log(url);
    const { data, isPending, error } = useFetchFunction(url);

    return (<>
        {isPending && <LoadingComponent />}
        {error && <div><Redirect to='/' /></div>}
        {data && (
            <InfoPage data={data}/>
        )}
    </>
    );
}

export default MovieFullInfo;