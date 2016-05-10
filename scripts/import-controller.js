/**
 * Created by harsh on 6/5/16.
 */


excelImport
    .controller('importController', function( $rootScope,
                                            $scope,
                                              $timeout){


        $scope.xlsxFile = undefined;

        $scope.importBegins = function(){
            var file = document.getElementById('fileInput').files[0];
            var filename = $('#fileInput').val().split('\\').pop();
            var extension = filename.split('.').pop();

            if (!file) {
                alert("Error Cannot find the file!");
                return;
            }
            else if(extension.toLowerCase() != 'xlsx'){
                alert('select file with extension .xlsx only!');
                return;
            }

            var reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = function(e) {
                var data = e.target.result;
                var wb = XLSX.read(data, {type: 'binary'});

                var data_sheet =  XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                var metadata = XLSX.utils.sheet_to_json(wb.Sheets[METADATA_SHEET]);

                var errorList = validateMetaData(TRACKER_REGISTRATION_PLUS_ENROLLMENT,metadata);
                if (errorList.length != 0){
                    $timeout(function(){
                        $scope.errorList = errorList;
                    })
                    return;
                }

                $timeout(function(){
                    $scope.importSummary = importer(TRACKER_REGISTRATION_PLUS_ENROLLMENT,data_sheet);
                })

                debugger
            };

        }

    });