/* -----------------------------------------------------------------------------
* Notifier.js - Developed by rlemon (rob.lemon@gmail.com) https://github.com/rlemon/Notifier.js
* Licensed under GNU GPL V3 https://github.com/rlemon/Notifier.js/blob/master/LICENSE
----------------------------------------------------------------------------- */

let container = null

export function saveRef(element) {
  container = element
}

export function notifyInfo(message, title) {
  notify(message, title, 'info')
}

export function notifySuccess(message, title) {
  notify(message, title, 'success')
}

export function notifyWarning(message, title) {
  notify(message, title, 'warning')
}

export function notifyError(message, title) {
  notify(message, title, 'error')
}

function notify(message, title, type) {
  const notification = createNotification(message, title, type)
  container.insertBefore(notification, container.firstChild)
  setTimeout(
    () => { fadeOut(notification) },
    5000
  )
}

function createNotification(message, title, type) {
  const notification = document.createElement('div')
  notification.className = `notification ${type}`

  notification.onclick = function() {
    this.parentNode.removeChild(this)
  }

  const text = document.createElement('div')
  notification.appendChild(text)

  if (title) {
    const titleText = document.createElement('div')
    titleText.className = 'notification-title'
    titleText.appendChild(document.createTextNode(title))
    text.appendChild(titleText)
  }

  if (message) {
    const messageText = document.createElement('div')
    messageText.appendChild(document.createTextNode(message))
    text.appendChild(messageText)
  }

  return notification
}

function fadeOut(element) {
  if (element.style.opacity && element.style.opacity > 0.05) {
    element.style.opacity -= 0.05
  } else if (element.style.opacity && element.style.opacity <= 0.1) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
    }
  } else {
    element.style.opacity = 0.9
  }
  setTimeout(
    () => { fadeOut(element) },
    1000 / 30
  )
}
