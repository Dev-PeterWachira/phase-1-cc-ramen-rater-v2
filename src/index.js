

// Callbacks
const handleClick = (ramen) => {
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById("ramen-description").textContent = ramen.description;
  document.getElementById("ramen-rating").textContent = ramen.rating;
  document.getElementById("ramen-comment").textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const newRamen = {
      name: form.name.value,
      image: form.image.value,
      description: "Delicious ramen",
      rating: 0,
      comment: "No comments yet!" 
    };
    displayNewRamen(newRamen);
    form.reset();
  });
}

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramens => {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener("click", () => handleClick(ramen));
      ramenMenu.appendChild(img);
});
if (ramens.length > 0) {
  handleClick(ramens[0]);
}
});
}

const main = () => {
  displayRamens();
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
