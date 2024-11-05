
function fetchData() {

    fetch("https://dummyjson.com/recipes")
        .then(data => data.json())
        .then(res => {
            res.recipes.map((rec, index) => {
                const p = document.createElement('p')
                p.classList.add('recipe')
                p.innerText = res.recipes[index].name
                document.getElementById('output').appendChild(p)
            })
        })
        .catch(error => console.log(error))
        .finally(() => console.log("Hi, finally closed all the resources"))
}