'use strict';

function createMessageError(text) {
  creationBtn.classList.add('errorButtonPress');

  const errorMessage = document.createElement('p');
  const errorContainer = document.querySelector('.js-errorcontainer');
  const errorMessageText = document.createTextNode(`Debes rellenar ${text}`);

  errorContainer.innerHTML = '';
  errorContainer.appendChild(errorMessage);
  errorMessage.appendChild(errorMessageText);
  errorMessage.setAttribute('class', 'CardCreated-a');
}

function handleButtonClickCreate(event) {
  if (userData.name === '') {
    createMessageError('el nombre');
  } else if (userData.job === '') {
    createMessageError('la profesion');
  } else if (userData.email === '') {
    createMessageError('el email');
  } else if (userData.linkedin === '') {
    createMessageError('el perfil de LinkedIn');
  } else if (userData.phone === '') {
    createMessageError('el telefono');
  } else if (userData.github === '') {
    createMessageError('el perfil de Github');
  } else {
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          createMessageError('la imagen');
        } else {
          const selectedSection = event.target.closest('.collapsible');
          const buttonCreate = document.querySelector('.js-buttoncreate');
          buttonCreate.classList.add('errorButtonPress');
          let linkCard = document.querySelector('.js-link-card');
          let twitterLink = document.querySelector('.js-twitter-link');
          selectedSection.classList.toggle('showLink');
          linkCard.innerHTML = data.cardURL;
          linkCard.href = data.cardURL;
          twitterLink.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${data.cardURL}`;
        }
      })
      .catch(() => {
        createMessageError('el formulario más tarde!');
      });
  }
}

creationBtn.addEventListener('click', handleButtonClickCreate);
