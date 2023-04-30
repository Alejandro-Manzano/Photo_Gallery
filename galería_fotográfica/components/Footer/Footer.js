import "./Footer.css"

const template = () => {
  return `
    <p>Copyright © - 2023 - Neoland</p>
    `
}

export const printTemplate = () => {
  document.querySelector("footer").innerHTML = template()
}