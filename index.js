export function setTitle(text) {
  let elemText = document.querySelector('.title')
  elemText.textContent = text;
  return elemText
}
setTitle('Hello, world!')