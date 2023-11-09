$(function() {
    loadRecipes();
    $("#recipes").on("click",".btn-danger",handleDelete)
});
function handleDelete ()
{
    var button=$(this);
    var parentDiv = button.closest(".recipe")
    var id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
        url:"https://usman-fake-api.herokuapp.com/api/recipes/"+id,
        method:"delete",
        success: function(){
            loadRecipes();
        }
    });
    console.log("Handle delete");
}
function loadRecipes() {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "GET",
        error: function(){
            var recipes = $("#recipes");
            recipes.html("An error has occured");
        },
        success: function(response){
            console.log(response);
            var recipe=$("#recipes");
            recipe.empty();
            for(let i=0 ;i<response.length;i++)
            {
                var rec = response[i];
                recipe.append(`
                <div class="recipe" data-id="${rec._id}">
                <h3>${rec.title}</h3>
                <p>${rec.body}</p>
                <button class="btn btn-warning btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">delete</button>
                </div>`);
            }
        }
    })
}