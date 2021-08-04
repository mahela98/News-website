import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import useFetchFunction from '../../fetch/useFetchFunction';
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import InfoPage from './InfoPage';

const MovieFullInfo = () => {
    const location = useLocation();
    var movieId = 379686;
    try {
        const { id } = location.state;
        console.log(id);
        movieId = id;
    } catch (error) {
        console.log(error);
    }
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ed59011d6c46d7a33abf946104590345&language=en-US`;
    console.log(url);
    const { data, isPending, error } = useFetchFunction(url);

    return (<>
        {isPending && <LoadingComponent />}
        {error && <div>{error}</div>}
        {data && (
            <InfoPage data={data}/>
        )}
    </>
    );
}

export default MovieFullInfo;