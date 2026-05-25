import './style.css'

const form = document.querySelector("#formulation")
const sum = document.querySelector("#sum")

const API = "http://localhost:3001/tasks"

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

window.addEventListener("DOMContentLoaded", async () => {

  const response = await fetch(API)
  const tasks = await response.json()

  tasks.forEach(task => {
    createTask(task.text, task.id)
  })

})

sum.addEventListener("click", () => {
  createTask()
})

function createTask(taskText = "", taskId = null) {

  const div = document.createElement("div")

  div.classList.add("flex", "gap-4", "m-2")

  div.innerHTML = `
  
    <input
      class="taskInput w-full border px-2 py-2 rounded-2xl bg-gray-100"
      type="text"
      placeholder="Enter your Task"
      value="${taskText}"
    >

    <button
      type="button"
      class="accept hover:cursor-pointer bg-black p-2 rounded-2xl border-2 border-white hover:-translate-y-0.5">
      ✅
    </button>

    <button
      type="button"
      class="delete hover:cursor-pointer bg-black p-2 rounded-2xl border-2 border-white hover:-translate-y-0.5">
      ⛔
    </button>

  `

  form.appendChild(div)

  const input = div.querySelector(".taskInput")
  const accept = div.querySelector(".accept")
  const remove = div.querySelector(".delete")

  accept.addEventListener("click", async () => {

    const text = input.value.trim()

    if(text === "") return

    if(taskId !== null) return

    const response = await fetch(API, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        text: text
      })

    })

    const data = await response.json()

    taskId = data.id

  })

  remove.addEventListener("click", async () => {

    div.remove()

    if(taskId === null) return

    await fetch(`${API}/${taskId}`, {
      method: "DELETE"
    })

  })

}