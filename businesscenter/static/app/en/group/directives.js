angular.module('group.directives', ['group.services'])
  .directive('memberList', ['PATH', 'Group', function(PATH, Group) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: PATH + 'group/member_dropdown.html',
      scope: {member:'=', placeholder:'='},
      controller: function($scope, PATH, Group){

            $scope.active = 0;
            $scope.results = [];
            $scope.is_visible = false;
            $scope.set_active = function (index) {$scope.active = index;};

            $scope.get_results = function (text) {
                $scope.results = Group.visitor_list({q: text});

            };

            $scope.input_blur = function(){
                if($scope.city){ $scope.results.length = 0 }
                $scope.is_visible = false;
            };
            $scope.select_item = function (index) {
                if ($scope.results.length > 0) {
                    $scope.member = $scope.results[index].username;
                    $scope.results.length = 0;
                }
            };
        }
    }
  }]);