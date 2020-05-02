const ROUTES = {
  main: {
    path: '/',
    title: 'Home'
  },
  statistics: {
    path: '/statistics',
    title: 'Statistics'
  },
  userStatistics: {
    path: '/statistics/:id',
    title: 'User statistics'
  },
  notFound: {
    path: '*',
    title: 'Not found'
  }
}

export default ROUTES;
