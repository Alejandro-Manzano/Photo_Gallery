export const linkpage = (id, page) => {
    document.querySelector(id).addEventListener("click", () => {
      page()
    })
  }
  