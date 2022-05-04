
// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/ramens')
    .then((response) => response.json)
    .then((data) => {
        addRamen(data)
})


//Ramen Images
const ramenImages = document.createElement('li')
document.getElementById('ramen-menu')
document.createElement('img')
let img = "./assets/image-placeholder.jpg"


let ramenMenu = document.getElementById('ramenMenu')

const addRamenImage = (data) => {
    for (const items of data) {
        let list = document.createElement('li')
        list.innerHTML = `${items.title}`
        ramenList.append(list)
    }
        list.addEventListener('submit', function() {
            form.innerHTML = ""
            let image = document.createElement('img')
            image.src = item.url
})

const ramenRating = document.getElementById('rating-display')
newRamenRating.textContent = ramenRating.ariaValueMax

rating.addEventListener('submit', createNewRating)

const createNewRating = (e) => {
    e.preventDefault()
    console.log(submit)
}

