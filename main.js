


// let image = document.querySelectorAll('img');
// image.addEventListener('click', function () {
//   alert("You clicked me!");
//   });

let modalImage = document.getElementById('modalImage');

const el = document.getElementById("gallery");
el.addEventListener("click", function (e) { 
    let imageSource = e.target.src;
//     let modalSource = document.getElementById("modalImage");
//    modalImage.attr("src", imageSource);
    console.log(imageSource);
    console.log(e.target); 
});


