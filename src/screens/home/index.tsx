import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { MovieProps } from '@/components/organisms/movie-list/types';
import { Home } from '@/components';

const HomeScreen = () => {
  const [data, setData] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios('https://ghibliapi.herokuapp.com/films/', {
      method: 'GET',
      headers: {
        'Content-type': 'Application/json',
        Accept: 'Application/json',
      },
    });
    setLoading(false);
    if (response.status === 200) {
      let dataResponse: MovieProps[] = response.data;
      dataResponse = dataResponse.slice(0, 8);
      setData(dataResponse);
    }
  };
  useEffect(() => {
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const setMovies = useCallback((movies: MovieProps[], reload?: boolean) => {
    if (reload) {
      fetchData();
    } else {
      setData(movies);
    }
  }, []);

  return <Home data={data} loading={loading} setData={setMovies} />;
};

export default HomeScreen;
