
$('.link').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/clicks-main.mp3'; 
    obj.play(); 
  });



  const open = document.getElementById('open');
  const modal = document.getElementById('modal-container');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    modal.classList.remove('hide');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hide');
    var obj = document.createElement('audio');
    obj.src = './assets/audio/rockNroll.mp3'; 
    obj.play();
  });

