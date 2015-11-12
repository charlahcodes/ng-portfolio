let AddPhotoController = function($scope, PhotosService, $state) {
  
  $scope.addPhoto = (obj) => {
    PhotosService.addPhoto(obj).then( (res) => {
      $scope.photo = {};
      $state.go('root.photography');
    });
  };
  
};

AddPhotoController.$inject = ['$scope', 'PhotosService', '$state'];

export default AddPhotoController;