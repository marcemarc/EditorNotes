/// <reference path="EditorNotes.html" />
angular.module("umbraco").controller("tooorangey.EditorNotes",function ($scope, editorState, dialogService) {
    // default config values
    $scope.editorNotes = "";
    $scope.panelTitle = $scope.model.label;
    $scope.noteCssClass = "";
    $scope.noteRenderMode = "Html";
    $scope.model.hideLabel = $scope.model.config.hideLabel == 1;
    $scope.isCollapsed = false;

    // read in config of the editor notes
    if (typeof $scope.model.config.editorNotes != "undefined") {
     //angular 1.2 $scope.editornotes = $sce.trustAsHtml($scope.model.config.editornotes);
        $scope.editorNotes = $scope.model.config.editorNotes;
    }
    if (typeof $scope.model.config.noteCssClass != "undefined") {
      $scope.noteCssClass = $scope.model.config.noteCssClass;
    }
    if (typeof $scope.model.config.noteRenderMode != "undefined" && $scope.model.config.noteRenderMode != "") {
        
        $scope.noteRenderMode = $scope.model.config.noteRenderMode;
        
    }
    if (typeof $scope.model.config.panelTitle != "undefined" && $scope.model.config.panelTitle != "") {
        $scope.panelTitle = $scope.model.config.panelTitle;
    }
    $scope.togglePanelCollapse = function () {
        // setup the editor notes
        $scope.isCollapsed = !$scope.isCollapsed;
        // if panel is collapsed - remember this fact in local storage for next time
        if ($scope.isCollapsed) {
            window.localStorage.setItem($scope.model.alias, true);
        }
        else {
            window.localStorage.setItem($scope.model.alias, false);
        }
       
    }
    $scope.openDialog = function () {
        var noteData = { "editorNotes": $scope.editorNotes, "panelTitle": $scope.panelTitle, "noteCssClass": $scope.noteCssClass + ' note-dialog' };
      //  dialogService.open({ template: '../app_plugins/tooorangey.EditorNotes/EditorNotesDialog.html', show: true, dialogData: dialogData });
            var dialog = dialogService.open({
            template: '../app_plugins/tooorangey.EditorNotes/EditorNotesDialog.html',
            dialogData:  noteData, show: true
        });
    }
    $scope.load = function() {
        // setup the editor notes
        // check if panel has been collapsed by this editor before
        if ($scope.noteRenderMode == "Collapsible") {
            var noteState = window.localStorage.getItem($scope.model.alias);
            if (typeof noteState != "undefined") {
                $scope.isCollapsed = (noteState === 'true');
            }
        }
    }

    $scope.load();

});