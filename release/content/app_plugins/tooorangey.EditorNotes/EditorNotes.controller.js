angular.module("umbraco")
    .controller("tooorangey.EditorNotes",
function ($scope) {
    $scope.editorNotes = "<p>Have a lovely editing day!</p>";
    $scope.noteCssClass = "";
    $scope.model.hideLabel = $scope.model.config.hideLabel == 1;
    if (typeof $scope.model.config.editornotes != "undefined") {
     //angular 1.2 $scope.editornotes = $sce.trustAsHtml($scope.model.config.editornotes);
       
        $scope.editorNotes = $scope.model.config.editornotes;
    }
    if (typeof $scope.model.config.notecssclass != "undefined") {
      $scope.noteCssClass = $scope.model.config.notecssclass;
    }

});