

// display or hide items in enagagements section --> event on button "en savoir plus ..."
var btnEngagement = document.getElementById('btn_engagement');

btnEngagement.addEventListener('click', function(e){
       var containerEngagement = document.getElementById('engagement_container');
              containerEngagement.style.display = "flex";
              btnEngagement.style.display = "none";
});



// menu toggle for mobiles

var btnOpenMenu = document.getElementById('icons_bars_menu');

btnOpenMenu.addEventListener('click', function(e) {
       var menuMobileContainer = document.getElementById('menu_toggle');
       menuMobileContainer.style.display = "flex";
       console.log("connected");
});

var btnCloseMenu = document.getElementById("icon_cross_menu");

 btnCloseMenu.addEventListener('click', function(e) {
       var menuMobileContainer = document.getElementById('menu_toggle');
       menuMobileContainer.style.display = "none";
});


