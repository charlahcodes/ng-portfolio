let ListController = function ($scope, PhotosService) {

  PhotosService.getPhotos().then ( (res) => {
    $scope.photos = res.data.results;
  });

};

ListController.$inject = ['$scope', 'PhotosService'];

export default ListController;