const navigator = () => {
  if(location.hash.startsWith('#trends')) {
    trendsPage()
  }else if (location.hash.startsWith('#search=')) {
    searchPage()
  }else if(location.hash.startsWith('#movie=')) {
    movieDetailPage()
  }else if (location.hash.startsWith('#categories=')) {
    categoriesPage()
  }else {
    homePage()
  }

  location.hash
}

const homePage = () => {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.remove('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive')
  genericListSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview()
  getCategoriesPreview()
}

const categoriesPage = () => {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericListSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
}

const movieDetailPage = () => {
  headerSection.classList.add('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericListSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')
}

const searchPage = () => {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericListSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
}

const trendsPage = () => {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')
  genericListSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
}

searchFormBtn.addEventListener('click', () => {
  location.hash = '#search='
})

trendingPreviewBtn.addEventListener('click', () => {
  location.hash = '#trends'
})

arrowBtn.addEventListener('click', ()=> {
  location.hash = '#home'
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)