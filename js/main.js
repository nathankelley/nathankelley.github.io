const links = [
    {label: "Week 1", url: "/index.html"}, 
    {label: "Week 2", url: "week_2/index.html"},
    {label: "Week 3", url: "week_3/index.html"},
    {label: "Week 4", url: "week_4/index.html"},
    {label: "Week 5", url: "week_5/index.html"},
    {label: "Week 6", url: "ToDoApplication/index.html"},
    {label: "Week 7", url: "week_7/index.html"},
    {label: "Week 8", url: "week_8/index.html"}
];

function addList(){
    const theList = document.getElementById("link-list");

    for  (link in links){
        theList.innerHTML += "<li><a href = " + links[link].url + ">" + links[link].label + "</a></li>";
    }
    
}

addList();