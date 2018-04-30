// $('.text_name').css('visibility', 'hidden');
// $('#profil').css('visibility', 'hidden');

jQuery(document).ready(function(){
    setTimeout(function(){
        $('.text_name').fadeIn(1000);
        $('#profil').fadeIn(1000);
    }, 3000);
});

$(function () {
    var diam = SVG('diams_cv').size(200, 200)
    var poly = diam.path('M49.408,48.563L35.443,20.534l35.85,0.483Z').fill('#d49f4b')
    var poly2 = diam.path('M100.725,48l14.02-27.747-35.99.478Z').fill('#d49f4b')
    var poly3 = diam.path('M95.242,52.1l-40.482.392L75.383,27Z').fill('#d49f4b')
    var poly4 = diam.path('M44.438,52.406L0.756,52.374,29.931,21.748Z').fill('#d49f4b')
    var poly5 = diam.path('M106.5,52.5l43.494-.032-29.05-30.719Z').fill('#d49f4b')
    var poly6 = diam.path('M69.447,131.889L3.371,59.416l42.751-.022Z').fill('#d49f4b')
    var poly7 = diam.path('M81.749,132.006l66.005-72.731-42.7-.022Z').fill('#d49f4b')
    var poly8 = diam.path('M97.5,59.251L75.168,130.509,53.253,59.31Z').fill('#d49f4b')

    poly.animate(2000).scale(0.8, 0.8).loop()
    poly2.animate(2000).scale(0.8, 0.8).loop()
    poly3.animate(2000).scale(0.8, 0.8).loop()
    poly4.animate(2000).scale(0.8, 0.8).loop()
    poly5.animate(2000).scale(0.8, 0.8).loop()
    poly6.animate(2000).scale(0.8, 0.8).loop()
    poly7.animate(2000).scale(0.8, 0.8).loop()
    poly8.animate(2000).scale(0.8, 0.8).loop()

    $( "#diams_cv" ).mouseover(function() {
       poly.fill('#fff');
       poly2.fill('#fff');
       poly3.fill('#fff');
       poly4.fill('#fff');
       poly5.fill('#fff');
       poly6.fill('#fff');
       poly7.fill('#fff');
       poly8.fill('#fff');

   });
   $( "#diams_cv" ).mouseout(function() {
       poly.fill('#d49f4b');
       poly2.fill('#d49f4b');
       poly3.fill('#d49f4b');
       poly4.fill('#d49f4b');
       poly5.fill('#d49f4b');
       poly6.fill('#d49f4b');
       poly7.fill('#d49f4b');
       poly8.fill('#d49f4b');
   });
});
