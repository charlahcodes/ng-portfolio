let PhotosService = function($http, PARSE, $state) {
  
  let url = PARSE.URL + 'classes/photo_gallery';

  this.getPhotos = function () {    
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
    });
  };

  this.getPhoto = function (photoId) {     
    return $http({
      method: 'GET',
      url: url + '/' + photoId,
      headers: PARSE.CONFIG.headers,
    });
  };

  let Photo = function (obj) {
    this.name = obj.name;
    this.url = obj.url;
    this.description = obj.description;
  };

  this.addPhoto = function (obj) {
    let p = new Photo(obj);
    return $http.post(url, p, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

PhotosService.$inject = ['$http', 'PARSE', '$state'];

export default PhotosService;