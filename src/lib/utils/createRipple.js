export default (event) => {
  const element = event.currentTarget;

  const rippleItem = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;
  const x = event.offsetX - radius;
  const y = event.offsetY - radius;

  rippleItem.style.width = rippleItem.style.height = `${diameter}px`;
  rippleItem.style.left = `${x}px`;
  rippleItem.style.top = `${y}px`;
  rippleItem.style.pointerEvents = 'none';
  rippleItem.classList.add('ripple');

  element.appendChild(rippleItem);

  rippleItem.addEventListener('animationend', () => element.removeChild(rippleItem));
};
