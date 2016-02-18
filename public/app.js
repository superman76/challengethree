var deleteBear = function(){


  var id = $(event.target).closest('tr').attr('id');
  var bear = $(event.target).closest('tr');

  if(confirm('💩💩💩💩Are you sure you want to delete this bear?')){
    $.ajax({
      url: '/api/bears/' + id,
      method: 'DELETE',
    }).done(function(){
      console.log('bear deleted!');
      bear.remove();
    })
  }

}

$('.deleteBear').on('click', deleteBear);

var addBear = function(event){
  event.preventDefault();

  var name = $('#name').val();
  var age = $('#age').val();
  var gender = $('#gender').val();
  var table = $('#bearTable');

  var bear = {};
  bear.name = name;
  bear.age = age;
  bear.gender = gender;

  $.ajax({
    url: '/api/bears',
    method: 'POST',
    data: bear
  }).done(function(d){
    var id = d._id;
    var name = d.name;
    var age = d.age;
    var gender = d.gender;
      table.append('<tr id=' + d._id + '> \
                <td>' + name + '</td> \
                <td>' + age + '</td> \
                <td>' + gender + '</td> \
                <td><button class="btn btn-primary deleteBear">delete</button></td> \
              </tr>'
            );
    $('.deleteBear').on('click', deleteBear);
  })

}

$('#addBear').on('click', addBear);















// var deleteBear = function(){
//   var id = $(event.target).closest('li').attr('id');

//   console.log('deleting bear with id: ' + id)

//   $.ajax({
//     url: "/api/bears/" + id,
//     method: 'DELETE'
//     }).done(function() {
//       console.log('deleted da bear')
//       window.location = '/'
// });

// }

// $('.deleteBear').on('click', deleteBear);

