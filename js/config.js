let config = function ($stateProvider, $urlRouterProvider) {

  // If routes don't match, go back to homepage
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root', {
      templateUrl: 'templates/layout.tpl.html',
      // tells ui-router this is an abstract state (no url)
      abstract: true,
    })
    .state('root.about', {
      url: '/about',
      // controller: 'HomeController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.coding', {
      url: '/coding',
      // controller: 'HomeController',
      templateUrl: 'templates/coding.tpl.html'
    })
    .state('root.photography', {
      url: '/photography',
      controller: 'ListController',
      templateUrl: 'templates/viewphotos.tpl.html'
    })
    .state('root.single', {
      url: '/single/:photoId',
      controller: 'SingleController',
      templateUrl: 'templates/singlephoto.tpl.html'
    })
    .state('root.addphoto', {
      url: '/add',
      controller: 'AddPhotoController',
      templateUrl: 'templates/addphoto.tpl.html'
    });



};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;