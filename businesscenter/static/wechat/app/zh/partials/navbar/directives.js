var navbar = angular.module('navbar', ['auth.services'])
.directive('dNavbar', ['$window', 'PATH','Logout', 'Auth', 'Me',
                        function($window, PATH, Logout, Auth, Me) {
    return {
        restrict: 'A',
        templateUrl: PATH + 'partials/navbar/navbar.html',
        controller: function($scope, $rootScope, $window, PATH, Logout, Auth, Me ){

            $scope.brand_text = 'ATYICHU';

            $scope.auth = Auth;

            var auth_promise = Auth.is_authenticated();

            auth_promise.then(function(result){
                if (!result.is_authenticated){
                    $window.location.replace("/visitor/");
                }
                else{
                    // Maybe need to optimize...
                    $rootScope.visitor = Me.get(function(success){
                        $rootScope.visitor_resolved = true;
                    });
                }
            });

            $rootScope.$on("$routeChangeStart", function(event, next, current) {
                $scope.isCollapsed = true;
            });

            $scope.logout = function(){
                $scope.r = Logout.query(function(r){
                    $rootScope.alerts.push({ type: 'info', msg: 'Good by.'});
                    $scope.auth.remove();
                });
            }


            $scope.animationsEnabled = true;
            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
        }
    };
}]);