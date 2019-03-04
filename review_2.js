const titleElement = document.getElementById(`title`);
titleElement.textContent = `JSで変更した後のタイトル`;

const descriptionElement = document.getElementById(`description`);
descriptionElement.innerHTML = `JSで変更した後の<b>説明文</b>`;

const profileElement = document.getElementById(`profile`);
profileElement.setAttribute(
  `src`,
  `https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg`
);

titleElement.className = `bg-yellow`;
