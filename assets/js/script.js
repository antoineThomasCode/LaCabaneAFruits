


var btnEngagement = document.getElementById('btn_engagement');

btnEngagement.addEventListener('click', function(e){
       var containerEngagement = document.getElementById('engagement_container');
              containerEngagement.style.display = "flex";
              btnEngagement.style.display = "none";
});
console.log(btnEngagement);