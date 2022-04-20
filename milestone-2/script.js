

$(document).ready(function (){
  $('#title').mouseenter(function (event){
    console.log(event);
  });
  
  $('.red').mouseleave(hidden);

  $('[name="name"]').click(clickInput);

  $('.list-element').dblclick (function () {
    console.log(this);
    $(this).hide();
  });
  
});


function clickInput(){
  console.log('click input');
};

function hidden(){
  $(this).hide();
}