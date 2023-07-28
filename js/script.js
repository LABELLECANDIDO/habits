const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)//registrou em memoria o evento de click 
form.addEventListener("change", save) //sempre que o formulario for ALTERADO, ele vai rodar o save

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) //adicionar->pt-br->transformar em data br / slice -> cortar uma string
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //guardar dados 
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //converter em um objeto depois de buscar no localStorage
nlwSetup.setData(data)
nlwSetup.load()
