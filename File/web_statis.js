<script>
// button
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// nav
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//popup
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//image
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption=img");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close-img")[0];
span.onclick = function() {
  modal.style.display = "none";
}

//clock
function updateviscount() {
            // Get the visitor count from local storage
            let count = localStorage.getItem('viscount');
            // If no count exists, set it to 0
            if (count === null) {
                count = 0;
            }
            // Increment the count
            count++;
            // Update the count in local storage
            localStorage.setItem('viscount', count);
            // Update the visitor count display
            document.getElementById('viscount').textContent = count;
        }

        // Call the update function on page load
        updateviscount();
</script>