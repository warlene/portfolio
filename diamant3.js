$(document).ready(function(){
    var bool2 = false;

    $(document).scroll(function(){
        var div = $( '#line3' );
        if (!bool2 && div.is( ':in-viewport' )) {
            bool2 = true;

            var draw = SVG('diamant9').size(300, 200).viewbox(0, 0, 400, 400)

            var polygon = draw.path('M66.238,20.522L59.866,93.13,13.036,40.188Z').fill('#d49f4b').opacity(0)
            // var polygon2 = draw.path('M163.186,103.919l-41.144-32.4,54.4-24.891Z').fill('#d49f4b').opacity(0)
            var polygon3 = draw.path('M241.651,103.294l-67.548.656L208.513,61.3Z').fill('#d49f4b').opacity(0)
            var polygon4 = draw.path('M242.162,86.943l42.719-29.628L231.73,29.351Z').fill('#d49f4b').opacity(0)
            var polygon5 = draw.path('M331.287,24.414l34.481,63.86,22.248-67.057Z').fill('#d49f4b').opacity(0)
            var polygon6 = draw.path('M103.634,398.593L63.3,239.74l62.983,33.493Z').fill('#d49f4b').opacity(0)
            var polygon7 = draw.path('M367.623,393.733l-15.9-163.36-47.979,52.686Z').fill('#d49f4b').opacity(0)
            var polygon8 = draw.path('M244.353,269.094l-11.21,124.414L172.209,284.8Z').fill('#d49f4b').opacity(0)

            polygon.animate(1000, 'quadOut').move(110,-40).rotate(85).opacity(1)  //.move(70,130)
            // polygon2.animate(1000, 'quadOut').rotate(25).move(155,95).opacity(1)
            polygon3.animate(1000, 'quadOut').move(170,130).opacity(1)
            polygon4.animate(1000, 'quadOut').move(188,90).rotate(-28).opacity(1)
            polygon5.animate(1000, 'quadOut').move(208,18).rotate(-62).opacity(1)
            polygon6.animate(1000, 'quadOut').move(145,194).rotate(-28).opacity(1)
            polygon8.animate(1000, 'quadOut').move(137,181).rotate(12).opacity(1)
            polygon7.animate(1000, 'quadOut').move(186,234).rotate(47).opacity(1)

            $('#diamant9').append("<h2>photoshop</h2>")

            var draw = SVG('diamant10').size(300, 200).viewbox(0, 0, 400, 400)

            var polygon = draw.path('M66.238,20.522L59.866,93.13,13.036,40.188Z').fill('#d49f4b').opacity(0)
            var polygon2 = draw.path('M163.186,103.919l-41.144-32.4,54.4-24.891Z').fill('#d49f4b').opacity(0)
            var polygon3 = draw.path('M241.651,103.294l-67.548.656L208.513,61.3Z').fill('#d49f4b').opacity(0)
            var polygon4 = draw.path('M242.162,86.943l42.719-29.628L231.73,29.351Z').fill('#d49f4b').opacity(0)
            // var polygon5 = draw.path('M331.287,24.414l34.481,63.86,22.248-67.057Z').fill('#d49f4b').opacity(0)
            var polygon6 = draw.path('M103.634,398.593L63.3,239.74l62.983,33.493Z').fill('#d49f4b').opacity(0)
            var polygon7 = draw.path('M367.623,393.733l-15.9-163.36-47.979,52.686Z').fill('#d49f4b').opacity(0)
            var polygon8 = draw.path('M244.353,269.094l-11.21,124.414L172.209,284.8Z').fill('#d49f4b').opacity(0)

            polygon.animate(1000, 'quadOut').move(110,-40).rotate(85).opacity(1)
            polygon2.animate(1000, 'quadOut').rotate(25).move(155,95).opacity(1)
            polygon3.animate(1000, 'quadOut').move(170,130).opacity(1)
            polygon4.animate(1000, 'quadOut').move(188,90).rotate(-28).opacity(1)
            // polygon5.animate(1000, 'quadOut').move(208,18).rotate(-62).opacity(1)
            polygon6.animate(1000, 'quadOut').move(145,194).rotate(-28).opacity(1)
            polygon8.animate(1000, 'quadOut').move(137,181).rotate(12).opacity(1)
            polygon7.animate(1000, 'quadOut').move(186,234).rotate(47).opacity(1)

            $('#diamant10').append("<h2>Adobe Premiere Pro</h2>")

            var draw = SVG('diamant11').size(300, 200).viewbox(0, 0, 400, 400)

            var polygon = draw.path('M66.238,20.522L59.866,93.13,13.036,40.188Z').fill('#d49f4b').opacity(0)
            var polygon2 = draw.path('M163.186,103.919l-41.144-32.4,54.4-24.891Z').fill('#d49f4b').opacity(0)
            var polygon3 = draw.path('M241.651,103.294l-67.548.656L208.513,61.3Z').fill('#d49f4b').opacity(0)
            var polygon4 = draw.path('M242.162,86.943l42.719-29.628L231.73,29.351Z').fill('#d49f4b').opacity(0)
            // var polygon5 = draw.path('M331.287,24.414l34.481,63.86,22.248-67.057Z').fill('#d49f4b').opacity(0)
            var polygon6 = draw.path('M103.634,398.593L63.3,239.74l62.983,33.493Z').fill('#d49f4b').opacity(0)
            var polygon7 = draw.path('M367.623,393.733l-15.9-163.36-47.979,52.686Z').fill('#d49f4b').opacity(0)
            var polygon8 = draw.path('M244.353,269.094l-11.21,124.414L172.209,284.8Z').fill('#d49f4b').opacity(0)

            polygon.animate(1000, 'quadOut').move(110,-40).rotate(85).opacity(1)
            polygon2.animate(1000, 'quadOut').rotate(25).move(155,95).opacity(1)
            polygon3.animate(1000, 'quadOut').move(170,130).opacity(1)
            polygon4.animate(1000, 'quadOut').move(188,90).rotate(-28).opacity(1)
            // polygon5.animate(1000, 'quadOut').move(208,18).rotate(-62).opacity(1)
            polygon6.animate(1000, 'quadOut').move(145,194).rotate(-28).opacity(1)
            polygon8.animate(1000, 'quadOut').move(137,181).rotate(12).opacity(1)
            polygon7.animate(1000, 'quadOut').move(186,234).rotate(47).opacity(1)

            $('#diamant11').append("<h2>Final Cut</h2>")

            var draw = SVG('diamant12').size(300, 200).viewbox(0, 0, 400, 400)

            var polygon = draw.path('M66.238,20.522L59.866,93.13,13.036,40.188Z').fill('#d49f4b').opacity(0)
            // var polygon2 = draw.path('M163.186,103.919l-41.144-32.4,54.4-24.891Z').fill('#d49f4b').opacity(0)
            var polygon3 = draw.path('M241.651,103.294l-67.548.656L208.513,61.3Z').fill('#d49f4b').opacity(0)
            var polygon4 = draw.path('M242.162,86.943l42.719-29.628L231.73,29.351Z').fill('#d49f4b').opacity(0)
            var polygon5 = draw.path('M331.287,24.414l34.481,63.86,22.248-67.057Z').fill('#d49f4b').opacity(0)
            var polygon6 = draw.path('M103.634,398.593L63.3,239.74l62.983,33.493Z').fill('#d49f4b').opacity(0)
            var polygon7 = draw.path('M367.623,393.733l-15.9-163.36-47.979,52.686Z').fill('#d49f4b').opacity(0)
            var polygon8 = draw.path('M244.353,269.094l-11.21,124.414L172.209,284.8Z').fill('#d49f4b').opacity(0)

            polygon.animate(1000, 'quadOut').move(110,-40).rotate(85).opacity(1)
            // polygon2.animate(1000, 'quadOut').rotate(25).move(155,95).opacity(1)
            polygon3.animate(1000, 'quadOut').move(170,130).opacity(1)
            polygon4.animate(1000, 'quadOut').move(188,90).rotate(-28).opacity(1)
            polygon5.animate(1000, 'quadOut').move(208,18).rotate(-62).opacity(1)
            polygon6.animate(1000, 'quadOut').move(145,194).rotate(-28).opacity(1)
            polygon8.animate(1000, 'quadOut').move(137,181).rotate(12).opacity(1)
            polygon7.animate(1000, 'quadOut').move(186,234).rotate(47).opacity(1)

            $('#diamant12').append("<h2>EZTitle</h2>")
        }
    });
});
