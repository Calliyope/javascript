var img = document.getElementsByTagName("img")[0];

var temp;

img.addEventListener("mouseenter", function () {

    var hoverPicUrl = img.getAttribute("data-hover");

    temp = img.getAttribute("src");

    img.src = hoverPicUrl;
})

img.addEventListener("mouseleave", function () {

    img.src = temp;
})