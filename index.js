$(function() {
    loadRecipes();
});

function loadRecipes() {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "GET",
        success: function(response){
            console.log(response);
        }
    })
}