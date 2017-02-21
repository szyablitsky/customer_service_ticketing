import { saveRef } from 'shared/components/notifier'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div')
  container.className = 'notifications-container'
  document.body.appendChild(container)
  saveRef(container)
})
