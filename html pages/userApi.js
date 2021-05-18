$(function() {
    loadUsers();
});

function loadUsers() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      error: function(response) {
        var users = $("#users");
        users.html("An Error has occured");
      },
      success: function(response) {
        console.log(response);
        var users = $("#users");
        users.empty();
        for (var i = 0; i < response.length; i++) {
          var us = response[i];
          users.append(
            `<div class="user container" data-id="${us._id}">
            <h3>UserName: ${us.username}</h3>
            <h5>Name: ${us.name}</h5>
            <p>
            <button class="btn btn-warning btn-sm float-right">Update Email</button> 
            Email: ${us.email}</p></div>`
          );
        }
      }
    })
}