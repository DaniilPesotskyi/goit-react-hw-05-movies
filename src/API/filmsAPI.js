const getPopularFilms = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US',
    { method: 'GET', headers: { accept: 'application/json' } }
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

const getFilmById = id => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBkMzc5ODJiZDJiYzcyZGQ0YzJlYmFkNDMyZDM1MSIsInN1YiI6IjY0MzZmNjFjMWY3NDhiMDBmNDQ4YTAxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gks0BHjnc6aPxcD5N06z9iz6G9Pk5pFGy9_rmy-7z3Y',
    },
  })
    .then(response => response.json())
    .catch(err => console.error(err));
};

const getFilmCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US`,
    { method: 'GET', headers: { accept: 'application/json' } }
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

const getFilmReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US&page=1`,
    { method: 'GET', headers: { accept: 'application/json' } }
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

const getFilmByQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=7e0d37982bd2bc72dd4c2ebad432d351&query=${query}&include_adult=false&language=en-US&page=1`,
    { method: 'GET', headers: { accept: 'application/json' } }
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export {
  getPopularFilms,
  getFilmById,
  getFilmCast,
  getFilmReviews,
  getFilmByQuery,
};
