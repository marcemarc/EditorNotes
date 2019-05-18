angular.module("umbraco").controller("tooorangey.EditorNotes.Dialog", function ($scope, editorState, editorService) {
    var vm = this;
    console.log(vm);
    vm.close = close;

    function close() {
        if ($scope.model.close) {
            $scope.model.close();
        }
    }
});