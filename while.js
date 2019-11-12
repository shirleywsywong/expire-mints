//get all the content in the article
let content = document.getElementsByTagName('article')[0].innerHTML
// let content2 = document.getElementsByTagName('article')[0].children
// console.log(content2)

//get the search term from the input field
document.getElementById("getSearchInput").onclick = function (event) {
    event.preventDefault();
    document.getElementById("error").innerHTML = ("")
    let inputText = document.getElementById("searchField");
    let input = inputText.value;
    
    //check for valid input
    if (!input) {
        document.getElementById("error").innerHTML = (`Please enter a valid search term`)
    } else {
        findMatch(input);
    }
}

//find the matching word in the content
function findMatch(input) {
    let match = [...content.matchAll(input)]
    // console.log(match)
    checkMatch(match)
}

//go through the results array, and give this word a background of yellow
function checkMatch(matches) {
    
    if (matches.length == 0) {
        document.getElementById("error").innerHTML = (`Your search did not return any result.`)
    } else {

        for (const match of matches) {

            // console.log(match, `Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`)
            let word = match[0];
            let wordStart = match.index;
            let wordEnd = match.index + match[0].length
            let preText = content.substring(0, wordStart)
            let postText = content.substring(wordEnd, content.length)

            document.getElementsByTagName('article')[0].innerHTML = 
            (preText + `<span class="match">` + word + `</span>` + postText)

        }
    }
}