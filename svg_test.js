$('.text_name').css('visibility', 'hidden');
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

    // var draw = SVG('drawing').size(400, 400)
    //
    // var polygon = draw.path('M66.238,20.522L59.866,93.13,13.036,40.188Z').fill('#d49f4b').opacity(0)
    // var polygon2 = draw.path('M163.186,103.919l-41.144-32.4,54.4-24.891Z').fill('#d49f4b').opacity(0)
    // var polygon3 = draw.path('M241.651,103.294l-67.548.656L208.513,61.3Z').fill('#d49f4b').opacity(0)
    // var polygon4 = draw.path('M242.162,86.943l42.719-29.628L231.73,29.351Z').fill('#d49f4b').opacity(0)
    // var polygon5 = draw.path('M331.287,24.414l34.481,63.86,22.248-67.057Z').fill('#d49f4b').opacity(0)
    // var polygon6 = draw.path('M103.634,398.593L63.3,239.74l62.983,33.493Z').fill('#d49f4b').opacity(0)
    // var polygon7 = draw.path('M367.623,393.733l-15.9-163.36-47.979,52.686Z').fill('#d49f4b').opacity(0)
    // var polygon8 = draw.path('M244.353,269.094l-11.21,124.414L172.209,284.8Z').fill('#d49f4b').opacity(0)
    //
    // polygon.animate(1000, 'quadOut').move(110,-40).rotate(85).opacity(1)
    // polygon2.animate(1000, 'quadOut').rotate(25).move(155,95).opacity(1)
    // polygon3.animate(1000, 'quadOut').move(170,130).opacity(1)
    // polygon4.animate(1000, 'quadOut').move(188,90).rotate(-28).opacity(1)
    // polygon5.animate(1000, 'quadOut').move(208,18).rotate(-62).opacity(1)
    // polygon6.animate(1000, 'quadOut').move(145,194).rotate(-28).opacity(1)
    // polygon8.animate(1000, 'quadOut').move(137,181).rotate(12).opacity(1)
    // polygon7.animate(1000, 'quadOut').move(186,234).rotate(47).opacity(1)

    // var diago = SVG('diago_parcours').size(1600, 500)
    //
    // var lineG = diago.line(0, 6, 0, 6).stroke({ width: 6 }).stroke('#d49f4b');
    // var lineD = diago.line(1550, 0,1550, 0).stroke({ width: 6 }).stroke('#d49f4b');
    //
    // lineG.animate(2000).plot([[705, 400],  [0, 6]])
    // lineD.animate(2000).plot([[1550, 0],  [700, 400]])
});
