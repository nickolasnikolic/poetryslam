wdApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {

  $scope.hData = [];

  $.getJSON('../api/home')
    .success(function(data) {
      console.log(data);
      $scope.hData = data;
      console.log($scope.hData);

      $scope.$apply();

    }).error(function(error){console.log(error);});

  $('#saveButton').click(function() {

    var title = $('#hallucinationTitle').val();
    var text = $('#hallucinationText').val();
    var name = $('#hallucinationName').val();

    $scope.hData.unshift({
      'title': title,
      'text': text,
      'name': name
    });

    console.log($scope.hData);
    $.post( '../api/home', {
      'title': title,
      'text': text,
      'name': name
    } );

    $('#hallucinationTitle').val('');
    $('#hallucinationText').val('');
    $('#hallucinationName').val('');
  });
}])
