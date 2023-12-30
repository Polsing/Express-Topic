const imageUpload_1 = document.getElementById("fileInput");
const uploadedImage_1 = document.getElementById("displayedImage");
const checkIcon_1 = document.getElementById("CheckIcon_1");

function chooseImage1() {
    document.getElementById("fileInput").click();
}
function submit_1(){
    document.getElementById("submit").click();

  }

    imageUpload_1.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
            uploadedImage_1.src = reader.result;
    };

    if (file) {
    reader.readAsDataURL(file);
    checkIcon_1.style.display = "flex";
    }

});

function toggleButton( ById1, ById2) {
  // Get the value from the textarea
  var userInput = document.getElementById(ById1).value;

  // Get the button element
  var submitButton = document.getElementById(ById2);

  // Toggle the button's display based on whether there is text in the textarea
  submitButton.style.display = userInput.trim() !== '' ? '' : 'none';
}
