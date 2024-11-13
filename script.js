//Utilizzo il metodo GET che recupera dei dati - quindi non metto il secondo parametro in fetch

fetch("https://striveschool-api.herokuapp.com/books")
  .then((book) => {
    console.log("book", book);
    if (book.ok) {
      return book.json();
    } else {
      throw new Error("call error");
    }
  })
  .then((books) => {
    console.log("books", books);
    const cardContainer = document.querySelector(".row");
    books.forEach((i) => {
      const col = document.createElement("col");
      col.classList.add(
        "col-12",
        "col-sm-6",
        "col-md-4",
        "col-lg-3",
        "col-xl-2"
      );

      const card = document.createElement("div");
      card.classList.add(
        "card",
        "rounded",
        "border-0",
        "mb-2",
        "text-white",
        "shadow",
      );
      card.style.backgroundColor = "rgb(79, 79, 79)";
      

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-img");
      cardImage.src = i.img;
      card.appendChild(cardImage);

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title", "fs-6", "fw-light");
      cardTitle.innerText = i.title;
      card.appendChild(cardTitle);

      const cardPrice = document.createElement("p");
      cardPrice.classList.add("card-text", "fst-italic");
      cardPrice.innerText = `Price: $${i.price}`;
      card.appendChild(cardPrice);

      const divButton = document.createElement("div");
      divButton.classList.add("divButton", "d-flex", "justify-content-between", "pb-1");
      
      card.appendChild(divButton);

      const button = document.createElement("button");
      button.classList.add("deleteBtn", "rounded", "bg-dark", "m-0", "text-white", "fst-italic", "border-light");
      button.innerText = "Scarta";
      divButton.appendChild(button);

      const buyButton = document.createElement("button");
      buyButton.classList.add("buyBtn", "rounded", "bg-dark","text-white", "fst-italic","border-light");
      buyButton.innerText = "Compra Ora";
      divButton.appendChild(buyButton);

      col.appendChild(card);

      cardContainer.appendChild(col);

      button.addEventListener("click", function () {
        col.remove();
      });
      
      buyButton.addEventListener("click", function(){
       
        const carrello = document.querySelector(".buyIt");
        const divBuyIt = document.createElement("div");
        divBuyIt.classList.add("d-flex")
        divBuyIt.style.gap = "1rem";
        const li = document.createElement ("li");
        li.innerText = `${i.title} - $${i.price}`;
        divBuyIt.appendChild(li);
        
        const deleteBuyBtn = document.createElement("button");
        deleteBuyBtn.classList.add("dBBtn", "btn-lg","rounded", "fst-italic", "fw-semi-bold", "border-light")
        deleteBuyBtn.style.backgroundColor = "rgb(79, 79, 79)"
        deleteBuyBtn.innerText = "elimina dal carrello";
        divBuyIt.appendChild(deleteBuyBtn);
        carrello.appendChild(divBuyIt);
        deleteBuyBtn.addEventListener("click",function(){
            divBuyIt.remove();
        })
      })
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
