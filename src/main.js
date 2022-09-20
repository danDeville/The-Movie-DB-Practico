const API_KEY = '4555a310d8f1177acd42924935675c9c'

const getTrendingMoviesPreview = async ()=> {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)
  const data = await res.json()

  const movies= data.results

  const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')

  movies.forEach(movie => {
    const movieContainer = document.createElement('div')
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')

    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path)

    movieContainer.appendChild(movieImg)
    trendingPreviewMoviesContainer.appendChild(movieContainer)
  })

}

getTrendingMoviesPreview()

console.log('Hello')