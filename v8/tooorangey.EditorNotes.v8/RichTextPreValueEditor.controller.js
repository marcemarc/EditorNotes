angular.module("umbraco")
    .controller("RichTextPreValueEditorController",
    function ($scope) {
        $scope.$watch('editornotes.value', function (newValue, oldValue) {

            $scope.model.value = newValue;
        });
        $scope.editornotes = {
            label: 'bodyText',
            description: 'Enter notes for editor',
            view: '/umbraco/views/propertyeditors/rte/rte.html',
            value: $scope.model.value,
            config: {
                editor: {
                    toolbar: ["ace", "undo", "redo", "cut", "styleselect", "bold", "italic", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "link", "umbmediapicker", "umbmacro", "umbembeddialog"],
                    stylesheets: [],
                    dimensions: {},
                    mode: "classic"
                }
            }
        };
    });