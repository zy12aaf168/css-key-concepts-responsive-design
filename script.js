fetch('catsdata.json').then((response) => {
    return response.json();
}).then((data) => {
    console.log("Success!", data.pets);


    const petCont = document.getElementsByClassName("pet-container");


    for (let i = 0; i < petCont.length; i++) {
        petCont[i].style.backgroundColor = "pink";
        // petCont[i].innerHTML = data.pets[i].name
        console.log(petCont[i].childNodes)

    }

    // const petImages = document.querySelectorAll(".pet-pic");

    // console.log("pet images:", petImages)

    // petImages.forEach(petImage => {
    //     console.log('pet data image: ', data.pets[0].photo)
    //     console.log('pet image: ', petImage)

    //     petImage.appendChild("<img src='" + data.pets[0].photo + "'>");

    //     // petImage.attr("src", data.pets[2].photo)

    //     petImage.innerHTML = '<img src="' + data.pets[2].photo +'">';
    // })




}).catch((err) => {
    console.warn('Something went wrong.', err);
});