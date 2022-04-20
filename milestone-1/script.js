
  $(document).ready(function () {
      
      let header = $('header');
      header.addClass('bg-blue');

      let title = $('#title');
      console.log(title);
      title.addClass('red');

      $('.col.red').removeClass('red');
      console.log($('.red'));

      $('[name="name"]').addClass('bg-blue');

  });