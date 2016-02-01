wdApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {

  $scope.hData = [];

  $.getJSON('../api/home')
    .success(function(data) {

      $scope.hData = data;
      console.log($scope.hData);

      $scope.$apply();

    });

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
      'name': name,
      'upvotes': 0
    } );

    $('#hallucinationTitle').val('');
    $('#hallucinationText').val('');
    $('#hallucinationName').val('');
  });

  $scope.upVote = function(id){
    $.post('../api/home/upvote/' + id)
        .success(function(data){

          $.getJSON('../api/home')//todo review
              .success(function(data) {

                $scope.hData = data;
                console.log($scope.hData);

                $scope.$apply();

              });
        });
  };

}])
