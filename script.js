const form1 = document.querySelector('#form1');
const form1display = document.querySelector('.codeinhex')

form1.addEventListener('submit', (e)=> {
  e.preventDefault();
  form1display.innerHTML = `${(e.target.color.value).toUpperCase()}`
  form1display.style.color = '#fff';
  document.querySelector('.copy').textContent = 'Copy'
})

const copyFunction = (target) => {
  const element = document.querySelector(target).innerHTML;
  navigator.clipboard.writeText(element);
  document.querySelector('.copy').textContent = 'Copied'
}