window.onload = function () {
  const refreshBtn = document.getElementById("refreshBtn");
  const getGems = document.getElementsByClassName("gem");
  const searchArea = document.getElementById("search-area");
  const gemCount = document.getElementById("gemCount");
//Creating an array of gems from list of elements with .gem class
  const gems = Array.from(getGems);
  console.log(gems.length);
  console.log(gems);

  //function to create random numbers
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //Function to place/replace gems
  function placeGems() {
    // Clear previously added gems
    searchArea.innerHTML = '';
    gems.splice(7, gems.length - 7);
    //Iterating through gems array and assigning random numbers (within viewport based boundaries) to top and left positions
    for (let i = 0; i < gems.length; i++) {
      let gem = gems[i];
      gem.style.position = "absolute";
      let genRandomX = randomNumber(0, window.innerWidth - 200);
      let genRandomY = randomNumber(0, window.innerHeight - 330);
      let randomX = genRandomX.toString() + "px";
      let randomY = genRandomY.toString() + "px";
      gem.style.left = randomX;
      gem.style.top = randomY;
      console.log(randomX, randomY);
      console.log(gem);

      //Adding an event listener to each gem so it will duplicate when clicked
      gem.addEventListener("click", duplicateGem);
      //Appending gem to searchArea parent element
      searchArea.appendChild(gem);
      //Updating gem count
      gemCount.innerHTML = gems.length;
    }
  }
  //Function to duplicate gems when clicked
  function duplicateGem(event) {
    console.log("gem clicked");
    let gemClicked = event.target;
    //newGem is a clone of gemClicked
    let newGem = gemClicked.cloneNode(true);
  
    //Append the new gem to the parent element
    searchArea.appendChild(newGem);
    
    //Position the new gem randomly
    newGem.style.position = "absolute";
    let genRandomX = randomNumber(0, window.innerWidth - 200);
    let genRandomY = randomNumber(0, window.innerHeight - 330);
    newGem.style.left = genRandomX + "px";
    newGem.style.top = genRandomY + "px";
    newGem.style.zIndex = 2;
  
    //Adding the new gem to the gems array
    gems.push(newGem);
  
    //Adding click event listener to the new gem for future duplication
    newGem.addEventListener("click", duplicateGem);
  
    //Adding class .new to all new gemms
    newGem.classList.add("new");

    //Updating gem count
    gemCount.innerHTML = gems.length;
  
    console.log("Total gems after duplication:", gems.length);
    console.log("New gem:", newGem);
    console.log("New gem left position:", newGem.style.left);
  }
  //Calling function to place gems
  placeGems();

  //Recalling function to place gems if refresh button is clicked
  if (refreshBtn) {
    refreshBtn.addEventListener("click", placeGems);
  }
  console.log(gems.length);
};