let SingleController = function($scope, $stateParams, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/photo_gallery/' + $stateParams.photoId;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singlePhoto = res.data;

  });



};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;