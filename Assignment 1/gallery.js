// Get Modal Elements
var modal = document.getElementById("gallery-modal");        // Modal box
var modalImg = document.getElementById("modal-img");         // Modal Image
var captionText = document.getElementById("captionText")     // Image Caption
var span = document.getElementsByClassName("close")[0];      // Close button

// Function to open the modal and show the image
function showImage(div) {
  modal.style.display = "block";
  var img = div.childNodes[1];
  var caption = div.childNodes[3];
  modalImg.src = img.src;
  captionText.innerHTML = caption.innerHTML;
}

// Function to close the modal on clicking the X button
span.onclick = function() {
  modal.style.display = "none";
}