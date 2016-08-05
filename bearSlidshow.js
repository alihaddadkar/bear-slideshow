$(document).ready(function(){
 $('#box-slider').carousel({
      interval: 6000,
 });
 $('#box-slider').each(function() {

   var self = $(this),
     get_item = $('#box-slider .item'),
     get_item_length = get_item.length,
     indicators = $('#box-slider .carousel-indicators'),
     index = "0";

   for (index; index < get_item_length; index++) {
     indicators.append('<li data-target="#slider" data-slide-to=" ' + index + ' "></li>');
   }

   indicators.find('li:first').addClass('active');
   get_item.first().addClass('active');

   get_item.each(function(i) {
     get_item_name = $(this).find('img').data('name');
     // console.log( "first:" + i + "::" + get_item_name);
     indicators.find('li:eq(' + i + ')').html(get_item_name);
   });

   self.each(function() {

     var slideIndex = $(this).find('li.active').text();
     $('#indicatorsTitle').append('<h4>' + slideIndex + '</h4>');

     self.on('slid.bs.carousel', function() {

       slideIndex = $(this).find('li.active').text();
       $('#indicatorsTitle h4').html(slideIndex);
       // console.log( "slide::" + slideIndex );
     });
   });

   $('#btnToggleIndicators').on('click', function() {
     $('.indicators-box').toggleClass('open');
   });
   $('#box-slider .carousel-indicators li').on('click', function() {
     $('.indicators-box').removeClass('open');
   });

 });
});
