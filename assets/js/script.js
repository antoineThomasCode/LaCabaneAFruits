

// display or hide items in enagagements section --> event on button "en savoir plus ..."
var btnEngagement = document.getElementById('btn_engagement');

btnEngagement.addEventListener('click', function(e){
       var containerEngagement = document.getElementById('engagement_container');
              containerEngagement.style.display = "flex";
              btnEngagement.style.display = "none";
});
console.log(btnEngagement);


// menu toggle for mobiles

