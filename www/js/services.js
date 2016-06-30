/**
 * Created by Bojan Kovachki on 11/18/2015.
 */

services
.service('PassDistanceService', function() {
  var Distance = "";

  var setDistance = function(distance){
    Distance = distance;
  }

  var getDistance = function(){
    return Distance;
  }

  return {
    setDistance: setDistance,
    getDistance: getDistance
  };
})
