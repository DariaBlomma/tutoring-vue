export default function saveInfo(name, variable) {
  localStorage.setItem(name, JSON.stringify(variable));
}
