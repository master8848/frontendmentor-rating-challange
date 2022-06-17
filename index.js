const preview = document.getElementById('preview');
const form = document.getElementById('form');
const button = document.getElementById('submit');
const rating = document.getElementById('rating');
let num;
for (let i = 1; i < 6; i++) {
  document.getElementById(i).addEventListener('click', () => {
    num && document.getElementById(num).classList.remove('selected');
    console.log(i);
    document.getElementById(i).classList.add('selected');
    num = i;
  });
}

button.addEventListener('click', (e) => {
  console.log('hi');
  e.preventDefault();
  if (num) {
    rating.innerHTML = num;
    form.classList.add('hide');
    preview.classList.remove('hide');
  }
});
