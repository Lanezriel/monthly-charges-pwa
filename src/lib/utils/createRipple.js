export default (event) => {
  const element = event.currentTarget;

  const rippleItem = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;
  const x = event.clientX - element.offsetLeft - radius;
  const y = event.clientY - element.offsetTop - radius;

  rippleItem.style.width = rippleItem.style.height = `${diameter}px`;
  rippleItem.style.left = `${x}px`;
  rippleItem.style.top = `${y}px`;
  rippleItem.classList.add('ripple');

  element.appendChild(rippleItem);

  rippleItem.addEventListener('animationend', () => element.removeChild(rippleItem));
};
