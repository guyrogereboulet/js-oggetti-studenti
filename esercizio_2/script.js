$(document).ready(function () {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var context = {
    title: "My New Post",
    body: "This is my first post!",
    author: "Jade"
   };

  var html = template(context);

  $("#app").append(html);

});
