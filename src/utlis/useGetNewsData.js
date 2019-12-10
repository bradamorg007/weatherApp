import { useState, useEffect } from 'react';
import Fetch from './Fetch';
import { mapNews } from './dataMapper';


const useGetNewsData = () => {

    const [newsData, setNewsData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const endPoint = `https://lski-proxy-server.azurewebsites.net/news`;

        Fetch(endPoint)
            .then((data) => {
                let output = []
                data.data.articles.map(article => {
                    output.push(mapNews(article));
                });
                setNewsData(output)
            })
            .catch((error) => {
                console.log(error);
                setError(error)
            });

        return (
            controller.abort()
        );

    }, []);

    return [newsData, error];

}

export default useGetNewsData;