angular.module('userProfiles')
.service('friendService', function( $http, $q ) {


    this.login = function( user ) {
      return $http.post('http://localhost:2000/api/login', {
        name: user.name,
        password: user.password
      });
    };

    this.getFriends = function() {
    	var deferred = $q.defer();

      $http.get('http://localhost:2000/api/profiles').then(function(response) {
        var friendArray = response.data;
        deferred.resolve(friendArray);
      });

      return deferred.promise;
    };

    this.getUserName = function() {
      var deferred = $q.defer();

      $http.get('http://localhost:2000/api/currentUserName').then(function(response) {
        var currentUserName = response.data;
        deferred.resolve(currentUserName);
      });

      return deferred.promise;
    };

});
