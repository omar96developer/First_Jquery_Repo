$(document).ready(function (){

  /* seleziono il button che mi aprira esatto modale */

  $('.open-modal').click( function (){
    let exactModal = $(this).data('modal');
    $('#' + exactModal).removeClass('modal--closed');
  });

  /* dal modale aperto ritorno al div padre e ci aggiungo la classe 
  eliminata il modo da chiuderlo */

  $('.modal__close').click( function (){
    $(this).parents('.modal').addClass('modal--closed');
  });
});
