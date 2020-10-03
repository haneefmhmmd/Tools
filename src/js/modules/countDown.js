let reset = false;
const countDownTime = document.querySelector('.countDown__time');
const countDownStart = document.querySelector('#countDown__start');
const errorMessage= document.querySelector('.errorInfo')


export let resetCountDown = ()=> reset = true;

export let startCountDown = function(startCountDownByENTER){
  if(countDownTime.value){

    if(!errorMessage.classList.contains('hide'))
      errorMessage.classList.add('hide');
    countDownStart.disabled = true;
    countDownStart.classList.toggle('disabled');
    
    var countDownDecrementer = setInterval(function(){
      if(countDownTime.value>0 && !reset){
        countDownTime.value-=1;
      }else{
        clearInterval(countDownDecrementer);
        countDownStart.disabled = false;
        countDownStart.classList.toggle('disabled');
        countDownTime.value="";
        reset=false;
        document.addEventListener('keyup',startCountDownByENTER);
      }
    },1000);  
  }else{
    errorMessage.classList.remove('hide');
    document.addEventListener('keyup',startCountDownByENTER);
  }
}