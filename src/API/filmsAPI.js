const getPopularFilms = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US',
    { method: 'GET', headers: { accept: 'application/json' } }
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export default getPopularFilms;
