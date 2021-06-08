export function setTitle(text) {
  let elemText = document.querySelector('.title')
  elemText.textContent = text;
  return elemText
}
console.dir(setTitle('Hello, world!'))