
setTimeout(function(){$('.hide-block').fadeOut('fast')},60000*{{ page.testtime }});  //30000 = 30 секунд
setTimeout(function(){$('.box-show').css("display", "block")},60000*{{ page.testtime }});  //30000 = 30 секунд
function timery(){
  var obj=document.getElementById('timer');
  obj.innerHTML--;
  if(obj.innerHTML==0){setTimeout(function(){},60000*{{ page.testtime }});}
  else{setTimeout(timery,60000*{{ page.testtime }});}
}
setTimeout(timery,60000*{{ page.testtime }});
