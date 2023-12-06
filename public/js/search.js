// need event listener for click event for search and filter.
// needs to read text from input field, needs to query the database with whatever text is in the name. put that into a list called searchEvents which we are pulling
// then rebuild the page with the searchEvents 
const search= require ("../models/Events.js");
const {Op}= require("sequilize");
var searchVar= document.getElementById('searchButton');
var inputVar= document.getElementById('inputField');
var filterVar= document.getElementById('filterButton')

searchVar.addEventListener("click", searchClick);

function searchClick(){   
    var searchText= inputVar.value;
    var searchEvent= 
    search.findAll({
        where: {
            [Op.like]: searchText
        }
    })
    
}
// biggest question how do I link the variable in the javascript to the variable in the handlebar file, basically how does this go into the handlebar file.
// What happens when we click filter? 