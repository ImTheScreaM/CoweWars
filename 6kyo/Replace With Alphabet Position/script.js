function alphabetPosition(text) {
  text = text.toLowerCase().replace(/[^a-z]/g , "")
  return [...text].map(i => i.charCodeAt() - 96).join(' ')
}
