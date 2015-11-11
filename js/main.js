import angular from 'angular';
import 'angular-ui-router';
import jquery from 'jquery';
import configFunct from './config';
import ListController from './controllers/list.controller';
import AddPhotoController from './controllers/addphoto.controller';
import SingleController from './controllers/single.controller';



// $('.oneButton').on('click', function(event){
//   var btn = $(event.target);
//   $('.oneButton').siblings().removeClass('notExpanded');
//   $('.twoButton').siblings().addClass('notExpanded');
//   $('.threeButton').siblings().addClass('notExpanded');
//   $('.oneButton').siblings().addClass('expanded');
//   $('.twoButton').siblings().removeClass('expanded');
//   $('.threeButton').siblings().removeClass('expanded');
// });





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
  ;
