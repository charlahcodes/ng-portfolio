let EditController = function($scope, $stateParams, PhotosService, $state) {
  
  PhotosService.getPhoto($stateParams.photoId).then( (res) => {
    $scope.singlePhoto = res.data;
  });

  $scope.updatePhoto = function (obj) {
    PhotosService.update(obj).then( (res) => {
      $state.go('root.photography');
    });
  };
  

};
EditController.$inject = ['$scope', '$stateParams', 'PhotosService', '$state'];
export default EditController;