// eslint-disable-next-line consistent-return
export default function getSavedInfo(name) {
  const saved = JSON.parse(localStorage.getItem(name));
  if (saved) {
    return saved;
  }
}
