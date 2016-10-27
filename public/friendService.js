angular.module('userProfiles')
.service('friendService', function($http) {


    this.login = function(user) {
      return $http.post('http://localhost:2000/api/login', user);
    };

    this.getFriends = function() {
      return $http.get('http://localhost:2000/api/profiles');
    };

});
