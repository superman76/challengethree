var deleteBear = function(){
  var id = $(event.target).closest('li').attr('id');

  console.log('deleting bear with id: ' + id)

  $.ajax({
    url: "/api/bears/" + id,
    method: 'DELETE'
    }).done(function() {
      console.log('deleted da bear')
      window.location = '/'
});

}

$('.deleteBear').on('click', deleteBear);