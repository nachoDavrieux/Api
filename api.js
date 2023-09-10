const url = "developer.marvel.com";

fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data);
    alert(data)
})