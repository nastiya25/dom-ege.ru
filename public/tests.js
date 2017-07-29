function declint(number, titles){
  return titles[(number%100>4 && number%100<20) ?  2 : ([2, 0, 1, 1, 1, 2])[Math.min(number%10, 5)]].replace('%s', number)
}
function initTest(minutes){
  var minutesLeft = minutes;
  var timeElement;

  function hideTest(){
    $('.hide-block').fadeOut('fast');
  }

  function showFinishMessage(){
    $('.box-show').css("display", "block");
  }

  function setupLimit(){
    setTimeout(function(){
      hideTest();
      showFinishMessage();
    }, 60000 * minutes);
  }

  function renderMinutes(){
    timeElement.html(declint(minutesLeft, ['%s минута', '%s минуты', '%s минут']));
  }
  function startTimer(){
    renderMinutes()
    setInterval(function(){
      minutesLeft--;
      renderMinutes()
    }, 60000 * minutes);
  }
  $(function(){
    timeElement = $('#timer');
    setupLimit();
    startTimer();
  });
}
