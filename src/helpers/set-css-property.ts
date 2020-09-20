export default function setCssProperty(propertyName: string, value: string) {
  let root = document.documentElement;
  root.style.setProperty(propertyName, value);
}
