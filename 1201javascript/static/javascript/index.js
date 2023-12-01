$(function(){
  $(".menuList>.menuItem").on("mouseover",function(){
    $(this).children(".subMenu").slideDown();
    // show(), hide(), toggle()
    // fadeIn(), fadeOut(), fadeToggle()
    // slideDown(3000) slideUp(), slideToggle() 
  });
  $(".menuList>.menuItem").on('mouseleave',function(){
    $(this).children(".subMenu").slideUp();
  });
})