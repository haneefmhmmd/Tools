  import {documentReady} from './actions';
  import {startCountDown,resetCountDown} from './modules/countDown';
  
  function callback(){

    const sections = document.querySelectorAll('body section');
    const navigator = document.querySelectorAll('nav div');
    
    window.showSection = function(sectionId){
      for(var i = 0 ; i<sections.length ; i++){
        if(!sections[i].classList.contains('hide')){
          sections[i].classList.add('hide');
          navigator[i].classList.remove('active');
        }
      }
      sections[sectionId].classList.toggle('hide');
      navigator[sectionId].classList.add('active');
    }

    const countDownTime = document.querySelector('.countDown__time');
    const countDownStart = document.querySelector('#countDown__start');
    const countDownReset = document.querySelector('#countDown__reset');
   
    document.onkeydown = function(e){
      if(e.keyCode >= 48 && e.keyCode <= 57)
      countDownTime.focus();
    }
    function startCountDownByENTER(e){
      if(e.keyCode == 13){
        document.removeEventListener('keyup',startCountDownByENTER);
        startCountDown(startCountDownByENTER);
        countDownTime.blur();
      }
    }
    document.addEventListener('keyup',startCountDownByENTER);
    countDownStart.addEventListener('click',startCountDown);
    countDownReset.addEventListener('click',resetCountDown);
  }
  
  documentReady(callback);