$(document).ready(function(){
    $('.sidebar ul li').each(function(){
      if ($(this).find('a').attr('href') == location.pathname){
        $(this).addClass('active');
      }
    });
    $('#dedicated-cluster-toggle').click(function(e){
      $('#dedicated-cluster-description').toggle();
      e.preventDefault();
      e.stopPropagation();
    });
});
