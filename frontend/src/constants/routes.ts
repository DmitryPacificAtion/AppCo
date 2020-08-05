const ROUTES = {
  main: {
    path: '/',
    title: 'Home'
  },
  userStatistics: {
    path: '/statistics/:id',
    title: 'User statistics'
  },
  statistics: {
    path: '/statistics',
    title: 'Statistics'
  },
  notFound: {
    path: '*',
    title: 'Not found'
  }
}

export default ROUTES;
