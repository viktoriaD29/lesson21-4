export const setTitle = (text) => {
  let elemText = document.querySelector('.title')
  elemText.textContent = text;
  return elemText
}
