function upDate(previewPic) {
    console.log("Event triggered: Mouseover or Focus.");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.getElementById('image-container').innerHTML = previewPic.alt;
    document.getElementById('image-container').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Event triggered: Mouseleave or Blur.");

    document.getElementById('image-container').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image-container').style.backgroundImage = "url('')";
}

function setTabIndexes() {
    console.log("Onload event triggered. Adding tabindex attributes...");
    
    let images = document.querySelectorAll('.preview');
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex for image number " + (i + 1));
    }
}

window.onload = setTabIndexes;