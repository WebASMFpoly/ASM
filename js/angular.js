var app = angular.module("app", []);
app.controller("dk", function($scope) {
    $scope.check = function() {
        if($scope.fullname.length < 3 || $scope.fullname.length > 30 
            || $scope.password.length < 8
            || $scope.password_confirmation.length < 8 
            || $scope.province == 0
            ){
                alert("ĐĂNG KÝ THẤT BẠI!");
            } else {
                alert('BẠN ĐĂNG KÝ THÀNH CÔNG!');
                setTimeout(function(){
                    window.location.href="http://127.0.0.1:5501/index.html"
                },1000);
            }
    }
});