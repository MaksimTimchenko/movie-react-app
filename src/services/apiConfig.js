const apiConfig = {
    _baseUrl: 'https://api.themoviedb.org/3/',
    _apiKey: '4b1904931d69ebadd9c979a8ae64469f',
    mainImage: (path) => `https://image.tmdb.org/t/p/original${path}`,
    'w500Image': (path) => `https://image.tmdb.org/t/p/w500/${path}`
};

export default apiConfig;