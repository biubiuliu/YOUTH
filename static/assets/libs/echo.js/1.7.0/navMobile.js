function delAtive(){
    $("#article").removeClass("nav-active");
    $("#explore").removeClass("nav-active");
    $("html").removeClass("nav-active");
    $("#bottomNav").removeClass("nav-active");
    $("#topNav").removeClass("nav-active");
    $("#mask").removeClass("active");
    $("#expoloremask").removeClass("active");
    $("#articlemask").removeClass("active");
    $("#navMobile").removeClass("active");

  }
  export {
    delAtive,
  }