// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnUnlock");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function successSubscribe() {
  alert('Sorry, our systems are under maintenance. Please try again later.');
}

document.getElementById("btnSubmit").addEventListener("click", function(e){
	  e.preventDefault();
	  // Hide first view
	  document.getElementById('my_form').style.display = 'none';
  
	  // Show thank you message element
	  document.getElementById('thank_you').style.display = 'block';
});
