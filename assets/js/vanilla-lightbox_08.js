// vanilla-lightbox_08.js 042920
// bautista_08.js 042420

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");

const lightBoxImg = document.createElement("img");
const lightBoxCutline = document.createElement("div");
const lightBoxTitle = document.createElement("div");


// SVG Buttons on Lightbox Model
// Previous Arrow SVG:
var NS="http://www.w3.org/2000/svg";
var svg=document.createElementNS(NS,"svg");
svg.width=32;
svg.height=32;
svg.setAttribute('viewBox', '-4 -5 32 32');
svg.setAttribute("class", "previousArrow");
var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", "12");
circle.setAttribute("cy", "12");
circle.setAttribute("r", "13");
circle.setAttributeNS(null, "stroke-width", "2");
circle.setAttribute('class','arrowCircle')
var PathArrowPrevious = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
PathArrowPrevious.setAttribute('class','arrow-previous')
PathArrowPrevious.setAttribute("d", "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"); //Set path's data
PathArrowPrevious.style.strokeWidth = "1px"; //Set stroke width

const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxPrev.classList.add("arrowLeft", "lightbox-prev");
lightBoxPrev.appendChild(svg, "lightbox-prev");

var svgLeft = document.getElementsByClassName('leftArrow');
svg.appendChild(circle);
svg.appendChild(PathArrowPrevious);

// Next Arrow SVG:
var svgnext=document.createElementNS(NS,"svg");
svgnext.width=32;
svgnext.height=32;
svgnext.setAttribute('viewBox', '-4 -5 32 32');
svgnext.setAttribute("class", "nextArrow");
var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", "12");
circle.setAttribute("cy", "12");
circle.setAttribute("r", "13");
circle.setAttributeNS(null, "stroke-width", "2");
circle.setAttribute('class','arrowCircle')
var PathArrowNext = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
PathArrowNext.setAttribute('class','arrow-next')
PathArrowNext.setAttribute("d","M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"); //Set path's data
PathArrowNext.style.strokeWidth = "1px"; //Set stroke width

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxNext.classList.add("arrowRight", "lightbox-next");
lightBoxNext.appendChild(svgnext, "lightbox-next");

var svgRight = document.getElementsByClassName('arrowRight');
svgnext.appendChild(circle);
svgnext.appendChild(PathArrowNext);
lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxTitle);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
// These are added 021320 - hackerhurs meetup
lightBoxContent.appendChild(lightBoxCutline);

document.body.appendChild(lightBoxContainer);




let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
   lightBoxImg.setAttribute("src", imageLocation);
//  let alt = igalleryItem[index-1].children[0].getAttribute('alt');
  let title = galleryItem[index-1].children[0].getAttribute('title');
  if( title )
  {
    lightBoxTitle.innerHTML=`<h4 class="title">${title}</h4>`; 
}
  let cutline = galleryItem[index-1].children[0].getAttribute('data-cutline'); //image.data.cutline;
  if( cutline )
  {
    lightBoxCutline.innerHTML=`<figcaption class="caption">${cutline}</figcaption>`; 
  }
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
    let titleIndex = parseInt(this.getAttribute("title"));
 console.log(this);
    lightBoxTitle(index = title);
     let cutlineIndex = parseInt(this.getAttribute("data-cutline"));
   lightBoxCutline(index = cutline);



}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}






function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);