var slider = document.getElementById('speed');
noUiSlider.create(slider, {
 start: [100],
 step: 1,
 orientation: 'horizontal', 
 range: {
   'min': [10],
   'max': [300]
 },
});

var sl2 = document.getElementById('nq');
noUiSlider.create(sl2, {
 start: 6,
 step: 1,
 orientation: 'horizontal', 
 range: {
   'min': 4,
   'max': 20
 },
});

sl2.noUiSlider.on('update', function (values, handle) {
    n = sl2.noUiSlider.get();
    n = parseInt(n) 
    reset();
});

slider.noUiSlider.on('update', function (values, handle) {
    speed = 10000 / slider.noUiSlider.get();
});

function set1(){
    qimg = q1;
}
