
$('.link').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/clicks-main.mp3'; 
    obj.play(); 
  });

  $('.headshot').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/rockNroll.mp3'; 
    obj.play();
  });