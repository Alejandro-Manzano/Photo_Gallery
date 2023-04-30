import "./Home.css"

const template = () => {
  return `
    <section class="home">
        <h2>Welcome to PhotoType</h2>
    </section>
    `
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template()
}
