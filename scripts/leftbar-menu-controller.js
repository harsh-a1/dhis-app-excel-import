//Controller for column show/hide
excelImport.controller('LeftBarMenuController',
        function($scope,
                $location) {
    $scope.panel = function(){
        $location.path('/import').search();
    };
            $scope.delete = function(){
                $location.path('/delete').search();
            };
        });