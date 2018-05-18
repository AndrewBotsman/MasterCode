window.addEventListener('DOMContentLoaded', function () {
    let popupBtn = document.getElementById('popup-btn'),
        readyBtn = document.getElementById('ready'),
        popup = document.getElementsByClassName('overlay')[0],
        mainContent = document.getElementsByClassName('main')[0],
        customization = document.getElementsByClassName('custom')[0],
        customInfo = document.getElementsByClassName('custom-info')[0],
        customChar = document.getElementsByClassName('custom-char')[0],
        customStyle = document.getElementsByClassName('custom-style')[0],
        styleSkin = document.getElementsByClassName('skin')[0],
        nextBtn = document.getElementsByClassName('next'),
        prevBtn = document.getElementsByClassName('prev'),
        personSkin = document.getElementById('person-skin'),
        personClothes = document.getElementById('person-clothes'),
        personHair = document.getElementById('person-hair'),
        candidateBlock = document.getElementsByClassName('main-cards-item')[1],
        mainCards = document.getElementsByClassName('main-cards-item');

    popupBtn.addEventListener('click', () => {
      createCandidate();
    });

    function createCandidate() {
      mainContent.style.display = 'none';
      popup.style.display = 'none';
      customization.style.display = 'flex';
      customInfo.style.display = 'block';
      customChar.style.display = 'block';
      customStyle.style.display = 'block';
    };
});
