let AddPhotoController = function($scope, $http, PARSE) {

  // parse will create class for you
  let url = PARSE.URL + 'classes/photo_gallery';
  
  let Photo = function (obj) {
    this.title = obj.title;
    this.url = obj.url;
    this.description = obj.description;
  };

  $scope.addPhoto = (obj) => {
    let p = new Photo(obj);
    $http.post(url, p, PARSE.CONFIG).then( (res) => {
      $scope.photo = {};
      location.assign('#/photography');
    });
  };
  
};

AddPhotoController.$inject = ['$scope', '$http', 'PARSE'];

export default AddPhotoController;