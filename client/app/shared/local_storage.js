export function loadState(key) {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) return null
    return JSON.parse(serializedState)
  } catch (err) {
    return null
  }
}

export function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
    // ignore write errors
  }
}
