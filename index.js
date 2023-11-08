$(function() {
    loadRecipes();
});

function loadRecipes() {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "GET",
        success: function(response){
            console.log(response);
            var recipe=$("#recipes");
            recipe.empty();
            for(let i=0 ;i<response.length;i++)
            {
                var rec = response[i];
                recipe.append(`
                <div class="recipe">
                <h3>${rec.title}</h3>
                <p>${rec.body}</p><button class="btn btn-danger btn-sm">delete</button>
                </div>`);
            }
        }
    })
}