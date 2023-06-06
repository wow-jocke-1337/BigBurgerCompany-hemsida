var options = {
  valueNames: [ 'name', 'born' , 'image', "Chicken", "Vegan", "Meat"]
};

var userList = new List('users', options);



$('.filterMeat').on('click', function(){
  var $text = $(this).text();
  if($(this).hasClass('selected')){
    userList.filter();
    $(this).removeClass('selected');
  } else {
    userList.filter(function(item) {
      return (item.values().Meat == $text);
    });
    $(this).addClass('selected');
  }
});


$('.filterChicken').on('click', function(){
  var $text = $(this).text();
  if($(this).hasClass('selected')){
    userList.filter();
    $(this).removeClass('selected');
  } else {
    userList.filter(function(item) {
      return (item.values().Chicken == $text);
    });
    $(this).addClass('selected');
  }
});

$('.filterVegan').on('click', function(){
  var $text = $(this).text();
  if($(this).hasClass('selected')){
    userList.filter();
    $(this).removeClass('selected');
  } else {
    userList.filter(function(item) {
      return (item.values().Vegan == $text);
    });
    $(this).addClass('selected');
  }
});

