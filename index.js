let apply = document.querySelector('.apply-button');
apply.addEventListener("click", function (){
  window.open('https://gogetfunding.com/campaign_funds/?pre=6986345');
});

let share = document.querySelector('.share-button');
share.addEventListener("click", function (){
  window.open('https://www.facebook.com/');
});

let reason = document.querySelector('#reason');
reason.addEventListener("click", function (){
  window.open('https://gogetfunding.com/Donate-2-resuce-anijals/?gclid=Cj0KCQjw_dWGBhDAARIsAMcYuJyXJ8a-g5vq7_vinXiUpBdTUqBFphbykKfUw9dwkU6c4CO2iyDA7R8aAkPxEALw_wcB');
});

let save = document.querySelector('.save-button');
save.addEventListener("click", function (){
  alert("Your donation widget has been saved");
});
