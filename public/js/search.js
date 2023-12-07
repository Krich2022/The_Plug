// need event listener for click event for search 
// needs to read text from input field, needs to query the database with whatever text is in the name. put that into a list called searchEvents which we are pulling
// then rebuild the page with the searchEvents 
var searchVar= document.getElementById('searchButton');
var inputVar= document.getElementById('inputField');

searchVar.addEventListener("click", searchClick);

function searchClick(){   
    var searchText= inputVar.value;
    console.log(searchText,"Search")
   fetch(`/api/search/${searchText}`)
   .then(response => response.json())
   .then(results => {
    console.log("API result",results)
   }).catch(error=> {
    console.log("Err",error)
   })
    
}
// biggest question how do I link the variable in the javascript to the variable in the handlebar file, basically how does this go into the handlebar file.
 