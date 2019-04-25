$('#About-Me').on('click', function() {
  $('#General-Information').text('My name is Kahinee Shah. My interest in urban planning stems from the idea of how cities grow. Through this blog I hope to dvelve into the various aspects of city planning and  share my perspective about them for a better understanding');$('#About-Me').css('background','#900C3F');$('#About-Me').css('color','#FFFFFF');$('#Information-Contact').css('background','#FFFFFF');$('#Information-Academic').css('background','#FFFFFF');$('#Information-Contact').css('color','#000000');$('#Information-Academic').css('color','#000000')
});

$('#Information-Academic').on('click', function() {
  $('#General-Information').text('Masters in Urban Planning at NYU Robert F. Wagner, School of Public Service'); $('#Information-Academic').css('background','#900C3F');$('#Information-Academic').css('color','#FFFFFF');$('#About-Me').css('background','#FFFFFF');$('#About-Me').css('color','#000000');$('#Information-Contact').css('background','#FFFFFF');$('#Information-Contact').css('color','#000000');
});

$('#Information-Contact').on('click', function() {
  $('#General-Information').text('Email: ks4660@gmail.com');$('#Information-Contact').css('background','#900C3F');$('#Information-Contact').css('color','#FFFFFF');$('#Information-Academic').css('background','#FFFFFF');$('#About-Me').css('background','#FFFFFF');$('#Information-Academic').css('color','#000000');$('#About-Me').css('color','#000000');
});

$('#button-1').on('click', function() {
$('.Transit-Oriented-Development').hide()
});

$('#button-1').on('click', function (){
$('.box-Info').show();
});

$('.back').on('click', function(){
$('.Transit-Oriented-Development').show();$('.box-Info').hide();
});

$('#button-2').on('click', function() {
$('.Community-Development').hide()
});

$('#button-2').on('click', function (){
$('.box-Info').show();
});

$('.back').on('click', function(){
$('.Community-Development').show();$('.box-Info').hide();
});


$('#button-3').on('click', function() {
$('.Streets-for-People').hide()
});

$('#button-3').on('click', function (){
$('.box-Info').show();
});

$('.back').on('click', function(){
$('.Streets-for-People').show();$('.box-Info').hide();
});
