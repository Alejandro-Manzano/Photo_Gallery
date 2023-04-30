import "./Gallery.css"

import { Loading } from "../../components/Loading/Loading"

const template = () => {
    return `
      <section class="gallery">
          <h2>Gallery</h2>
          <div class="buttons">
           
          </div>
          <div class="spinner"></div>
          <div class="photo-gallery"></div>
      </section>
      `
  }

const getPhotos = (page) => {

    const container = document.querySelector(".photo-gallery")

    container.innerHTML = "";

    const spinnerContainer = document.querySelector(".spinner");
    spinnerContainer.innerHTML = "";

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`)

    .then((res) => res.json())

    .then((photos) => {

        spinnerContainer.innerHTML = "";

        for (const photo of photos) {

            const figure = document.createElement("figure")

            figure.innerHTML = `
            <img src=${photo.download_url} alt=${photo.author}/>
            <figcaption>${photo.author}</figcaption>
            `
            container.appendChild(figure);
        }

    })

    .catch((err) => {
        CredentialsContainer.innerHTML = `<h3>No se han podido recuperar las imágenes de la base de datos</h3>`
    })
}

const listeners = () => {
    //Creamos 15 botones
    const buttonscontainer = document.querySelector(".buttons")
    for (let i = 1; i <= 15; i++) {
      buttonscontainer.innerHTML += `<button class="pageBtn">${i}</button>`
    }
    //A cada uno de ellos le damos un addEventListener
    const buttons = document.querySelectorAll(".pageBtn")
    for (const button of buttons) {
      button.addEventListener("click", () => {
        getPhotos(button.innerText)
      })
    }
  }
  
  export const printTemplate = () => {
    document.querySelector("main").innerHTML = template()
    getPhotos(1)
    listeners()
  }

  