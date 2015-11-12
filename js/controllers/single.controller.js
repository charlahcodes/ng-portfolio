let SingleController = function($scope, $stateParams, PhotosService, $state) {
  
  PhotosService.getPhoto($stateParams.photoId).then( (res) => {
    $scope.singlePhoto = res.data;
  });

  $scope.deletePhoto = function (obj) {
    PhotosService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.photography');
    });
  };

};
SingleController.$inject = ['$scope', '$stateParams', 'PhotosService', '$state'];
export default SingleController;