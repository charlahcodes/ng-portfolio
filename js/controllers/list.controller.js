let ListController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/photo_gallery';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.photos = res.data.results;
  });

};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;