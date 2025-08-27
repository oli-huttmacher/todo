// import './style.css'
// import { registerSW } from 'virtual:pwa-register'

// // Enregistre le Service Worker (installable + offline)
// registerSW({ immediate: true })

// // Références DOM (sans helpers)
// const form     = document.getElementById('form')
// const input    = document.getElementById('task')
// const list     = document.getElementById('list')
// const clearBtn = document.getElementById('clear')
// const countEl  = document.getElementById('count')

// // Données (offline via localStorage)
// const STORAGE_KEY = 'pwa-todos-v1'
// let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

// function save() {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
//   render()
// }

// function escapeHtml(s) {
//   return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
// }

// function render() {
//   list.innerHTML = ''
//   todos.forEach((t, i) => {
//     const li = document.createElement('li')
//     li.className = 'item'
//     li.innerHTML = `
//       <label class="row">
//         <input type="checkbox" ${t.done ? 'checked' : ''} data-i="${i}" class="toggle" />
//         <span class="txt ${t.done ? 'done' : ''}">${escapeHtml(t.text)}</span>
//       </label>
//       <button class="del" data-i="${i}" title="Supprimer">✕</button>
//     `
//     list.appendChild(li)
//   })
//   countEl.textContent = `${todos.length} tâche(s)`
// }

// Events
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = input.value.trim()
  if (!text) return
  todos.unshift({ text, done: false, createdAt: Date.now() })
  input.value = ''
  save()
})

list.addEventListener('click', (e) => {
  const target = e.target
  const i = target.dataset.i
  if (target.classList.contains('del')) {
    todos.splice(i, 1)
    save()
  } else if (target.classList.contains('toggle')) {
    todos[i].done = target.checked
    save()
  }
})

clearBtn.addEventListener('click', () => {
  if (!todos.length) return
  if (confirm('Supprimer toutes les tâches ?')) {
    todos = [];
    save()
  }
})

// Boot
render()
