const titleElement = document.getElementById('title');
titleElement.textContent = 'JSで変更した後のタイトル';

const descriptionElement = document.getElementById('description');
console.log(descriptionElement);

const profilrElement = document.getElementById('profile');
profilrElement.setAttribute(
  'src',
  'https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg'
);

titleElement.className = 'bg-yellow';
