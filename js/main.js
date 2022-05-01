const links = [
    {label: "Week 1", url: "week_1/index.html"}, 
    {label: "Week 2", url: "week_2/index.html"}
];

function addList(){
    const theList = document.getElementById("link-list");

    for  (link in links){
        theList.innerHTML += "<li><a href = " + links[link].url + ">" + links[link].label + "</a></li>";
    }
    
}

addList();