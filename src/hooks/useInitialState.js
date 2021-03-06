import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.log("Ocurrio un error", error));
    }, []);
    return videos;
}

export default useInitialState