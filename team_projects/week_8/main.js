// First: Create a basic application and use fetch to pull a list of people or ships. Display this list in the browser window.

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById("display").innerHTML = data;
    })
    .catch((error) => {
        console.log('Error:', error);
    })
}

postData("https://swapi.dev/api/");