$(document).ready(function(){
    $('.sidebar ul li').each(function(){
      if ($(this).find('a').attr('href') == location.pathname){
        $(this).addClass('active');
      }
    });
});
