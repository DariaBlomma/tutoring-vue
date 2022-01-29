export default function getSavedInfo(name) {
  return JSON.parse(localStorage.getItem(name));
}
