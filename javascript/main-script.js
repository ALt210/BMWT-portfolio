// Open and close sidebar
document.addEventListener("DOMContentLoaded",function()
{
  //add eventlisteners
  onElementHovers();
})

// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}

 
  
function onElementHovers(){
  
  var socialfootericon=document.getElementsByClassName("fa-brands");

    for (const icon of socialfootericon){
      icon.addEventListener("mouseenter",function()
    {
      icon.classList.add("fa-beat-fade");
    })
      icon.addEventListener("mouseleave",function()
    {
      icon.classList.remove("fa-beat-fade");
    })
    } 
}

  
