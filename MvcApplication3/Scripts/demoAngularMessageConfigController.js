function demoMessageConfigController($scope, $location, $http) {
    $http.get('Demo/GetMessageConfig').success(function (data) {
        $scope.MessageConfig = data;
    });
    
    $scope.Save = function () {
        $http({
            url: 'Demo/SetMessageConfig',
            method: "POST",
            data: { 'messageConfig': $scope.MessageConfig },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (response) {
            $scope.response = response;
        });
    };

    $scope.GoSend = function () {
        $location.path('/Message');
    };

}