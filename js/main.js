import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';
import configFunct from './config';

import AddPhotoController from './controllers/addphoto.controller';
import SingleController from './controllers/single.controller';
import ListController from './controllers/list.controller';
import EditController from './controllers/edit.controller';

import PhotosService from './services/photos.service';


angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': '2bG9qVAWsXy2S9eUJCpSTgL33y4stJsaAbQQQhQv',
        'X-Parse-REST-API-Key': 'yNRzc5FxBRPP3mmC27O7sWI7VruBdfPCg7X9vNug'
      }
    }
  })
  .config(configFunct)
  .controller('ListController', ListController)
  .controller('AddPhotoController', AddPhotoController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)
  .service('PhotosService', PhotosService)
  ;






