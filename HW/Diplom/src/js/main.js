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
        mainCards = document.getElementsByClassName('main-cards-item'),
        candidateName = document.getElementById('name'),
        candidateAge = document.getElementById('age'),
        candidateBio = document.getElementById('bio'),
        candidateSelect = document.getElementById('select'),
        candidateRadio = document.getElementsByClassName('radio')[0],
        candidateMale = document.getElementById('male'),
        candidateFemale = document.getElementById('female'),
        childItems = [
            document.getElementsByClassName('hair-style'),
            document.getElementsByClassName('clothes-style'),
            document.getElementsByClassName('skin-color')
        ],
        constructorCandidate = document.getElementsByClassName('construct')[0],
        candidateNew = document.getElementsByClassName('candidate-new')[0],
        skinColor = [
            document.getElementsByClassName('skin-color-1')[0],
            document.getElementsByClassName('skin-color-2')[0],
            document.getElementsByClassName('skin-color-3')[0]
        ],
        hairStyleMale = [
            document.getElementsByClassName('hair-style-1')[0],
            document.getElementsByClassName('hair-style-2')[0],
            document.getElementsByClassName('hair-style-3')[0],
        ],
        hairStyleFemale = [
            document.getElementsByClassName('hair-style-4')[0],
            document.getElementsByClassName('hair-style-5')[0],
            document.getElementsByClassName('hair-style-6')[0],
        ],
        clothesStyleMale = [
            document.getElementsByClassName('clothes-style-1')[0],
            document.getElementsByClassName('clothes-style-2')[0],
            document.getElementsByClassName('clothes-style-3')[0],
        ],
        clothesStyleFemale = [
            document.getElementsByClassName('clothes-style-4')[0],
            document.getElementsByClassName('clothes-style-5')[0],
            document.getElementsByClassName('clothes-style-6')[0],
        ],
        constructSkinMale = [
            'url("img/skin/skin-1.png") center/cover no-repeat',
            'url("img/skin/skin-2.png") center/cover no-repeat',
            'url("img/skin/skin-3.png") center/cover no-repeat',
        ],
        constructSkinFemale = [
            'url("img/skin/skin-4.png") center/cover no-repeat',
            'url("img/skin/skin-5.png") center/cover no-repeat',
            'url("img/skin/skin-6.png") center/cover no-repeat'
        ],
        constructHairMale = [
            'url("img/hair/construct/hair-1.png") center/cover no-repeat',
            'url("img/hair/construct/hair-2.png") center/cover no-repeat',
            'url("img/hair/construct/hair-3.png") center/cover no-repeat',
        ],
        constructHairFemale = [
            'url("img/hair/construct/hair-4.png") center/cover no-repeat',
            'url("img/hair/construct/hair-5.png") center/cover no-repeat',
            'url("img/hair/construct/hair-6.png") center/cover no-repeat'
        ],
        constructClothesMale = [
            'url("img/clothes/construct/clothes-1.png") center/cover no-repeat',
            'url("img/clothes/construct/clothes-2.png") center/cover no-repeat',
            'url("img/clothes/construct/clothes-3.png") center/cover no-repeat',
        ],
        constructClothesFemale = [
            'url("img/clothes/construct/clothes-4.png") center/cover no-repeat',
            'url("img/clothes/construct/clothes-5.png") center/cover no-repeat',
            'url("img/clothes/construct/clothes-6.png") center/cover no-repeat'
        ];

    candidateBlock.style.display = 'none';

    let resultName, resultAge, resultBio,
        personArr = [personHair, personClothes, personSkin];


    popupBtn.addEventListener('click', () => {
      createCandidate();
    });

    candidateName.addEventListener('blur', () => {
        if (candidateName.value.match(/^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/ig) && candidateName.value.length > 3) {
            resultName = true;
            candidateName.style.border = 'none';
        }
        else {
            candidateName.value = '';
            candidateName.style.border = '2px solid red';
            candidateName.placeholder = 'Некорректные ФИО';
        }
    });
    candidateAge.addEventListener('blur', () => {
        if (candidateAge.value.match(/^\S[0-9_]+/i) && candidateAge.value >= 18 && candidateAge.value <= 65) {
            resultAge = true;
            candidateAge.style.border = 'none';
        }
        else {
            candidateAge.value = '';
            candidateAge.style.border = '2px solid red';
            candidateAge.placeholder = 'Неверный возраст';
        }
    })
    candidateBio.addEventListener('blur', () => {
        if (candidateBio.value.match(/^\S[a-zа-я0-9_]+/i) && candidateBio.value.length > 3) {
            resultBio = true;
            candidateBio.style.border = 'none';
        }
        else {
            candidateBio.value = '';
            candidateBio.style.border = '2px solid red';
            candidateBio.placeholder = 'Биография слишком мала, вам не победить на выборах';
        }
    });

    function createCandidate() {
      mainContent.style.display = 'none';
      popup.style.display = 'none';
      customization.style.display = 'flex';
      customInfo.style.display = 'block';
      customChar.style.display = 'block';
      customStyle.style.display = 'block';
    };

    function saveCandidate () {
        if (resultName && resultAge && resultBio) {
            candidateBlock.style.display = 'block';
            mainContent.style.display = 'block';
            customization.style.display = 'none';
            customInfo.style.display = 'none';
            customChar.style.display = 'none';
            customStyle.style.display = 'none';
        }
        else {
            alert('Введены неверные данные');
        }
    };

    function recreateCandidate () {
            candidateName.value = '';
            candidateAge.value = '';
            candidateBio.value = '';
            candidateSelect.value = 'Либеральные';
            candidateMale.checked = true;

            personArr[2].style.background = ('url("img/skin/skin-1.png") center/cover no-repeat');
            personArr[1].style.background =  ('url("img/clothes/construct/clothes-1.png") center/cover no-repeat');
            personArr[0].style.background = ('url("img/hair/construct/hair-1.png") center/cover no-repeat');
            resultName = false;
            resultAge = false;
            resultBio = false;

            checkSexMale();
    };

    function checkSexMale() {

        let slideNow = {
            skin: 0,
            hair: 0,
            clothes: 0,
        };

        if (male.checked) {

            // skin

            personArr[2].style.background = constructSkinMale[0];
            personArr[1].style.background = constructClothesMale[0];
            personArr[0].style.background = constructHairMale[0];

            for (let j = 0; j < childItems.length; j++) {
                for (let i = 0; i < childItems[j].length; i++) {
                    childItems[j][i].classList.remove('active');
                }
            }
            let styleArr = [skinColor, clothesStyleMale, hairStyleMale];

            for (let i = 0; i < styleArr.length; i++) {
                styleArr[i][0].classList.add('active');
            }

            function goToSlideSkin(n){
                for (var i = 0; i < childItems[2].length; i++) {
                    childItems[2][i].classList.remove('active');
                }
                skinColor[slideNow.skin].classList.remove('active');
                slideNow.skin = (n + skinColor.length) % skinColor.length;
                skinColor[slideNow.skin].classList.add('active');
            }

            nextBtn[0].addEventListener('click', () => {
                goToSlideSkin(slideNow.skin + 1);
                personArr[2].style.background = constructSkinMale[slideNow.skin];
            });
            prevBtn[0].addEventListener('click', () => {
                goToSlideSkin(slideNow.skin - 1);
                personArr[2].style.background = constructSkinMale[slideNow.skin];
            });

            //hair
            function goToSlideHair(n){
                for (var i = 0; i < childItems[0].length; i++) {
                    childItems[0][i].classList.remove('active');
                }
                hairStyleMale[slideNow.hair].classList.remove('active');
                slideNow.hair = (n + hairStyleMale.length) % hairStyleMale.length;
                hairStyleMale[slideNow.hair].classList.add('active');
            }

            nextBtn[1].addEventListener('click', () => {
                goToSlideHair(slideNow.hair + 1);
                personArr[0].style.background = constructHairMale[slideNow.hair];

            });
            prevBtn[1].addEventListener('click', () => {
                goToSlideHair(slideNow.hair - 1);
                personArr[0].style.background = constructHairMale[slideNow.hair];
            });

            //clothes
            function goToSlideClothes(n){
                for (var i = 0; i < childItems[1].length; i++) {
                    childItems[1][i].classList.remove('active');
                }
                clothesStyleMale[slideNow.clothes].classList.remove('active');
                slideNow.clothes = (n + clothesStyleMale.length) % clothesStyleMale.length;
                clothesStyleMale[slideNow.clothes].classList.add('active');
            }

            nextBtn[2].addEventListener('click', () => {
                goToSlideClothes(slideNow.clothes + 1);
                personArr[1].style.background = constructClothesMale[slideNow.clothes];
            });
            prevBtn[2].addEventListener('click', () => {
                goToSlideClothes(slideNow.clothes - 1);
                personArr[1].style.background = constructClothesMale[slideNow.clothes];
            });
        }
    }
    function checkSexFemale() {

        let slideNow = {
            skin: 0,
            hair: 0,
            clothes: 0,
        };

        if (female.checked) {

            // skin
            personArr[2].style.background = constructSkinFemale[0];
            personArr[1].style.background = constructClothesFemale[0];
            personArr[0].style.background = constructHairFemale[0];

            for (let j = 0; j < childItems.length; j++) {
                for (let i = 0; i < childItems[j].length; i++) {
                    childItems[j][i].classList.remove('active');
                }
            }
            let styleArr = [skinColor, clothesStyleFemale, hairStyleFemale];

            for (let i = 0; i < styleArr.length; i++) {
                styleArr[i][0].classList.add('active');
            }

            function goToSlideSkin(n){
                for (var i = 0; i < childItems[2].length; i++) {
                    childItems[2][i].classList.remove('active');
                }
                skinColor[slideNow.skin].classList.remove('active');
                slideNow.skin = (n + skinColor.length) % skinColor.length;
                skinColor[slideNow.skin].classList.add('active');
            }

            nextBtn[0].addEventListener('click', () => {
                goToSlideSkin(slideNow.skin + 1);
                personArr[2].style.background = constructSkinFemale[slideNow.skin];
            });
            prevBtn[0].addEventListener('click', () => {
                goToSlideSkin(slideNow.skin - 1);
                personArr[2].style.background = constructSkinFemale[slideNow.skin];
            });

            //hair
            function goToSlideHair(n){
                for (var i = 0; i < childItems[0].length; i++) {
                    childItems[0][i].classList.remove('active');
                }
                hairStyleFemale[slideNow.hair].classList.remove('active');
                slideNow.hair = (n + hairStyleFemale.length) % hairStyleFemale.length;
                hairStyleFemale[slideNow.hair].classList.add('active');
            }

            nextBtn[1].addEventListener('click', () => {
                goToSlideHair(slideNow.hair + 1);
                personArr[0].style.background = constructHairFemale[slideNow.hair];

            });
            prevBtn[1].addEventListener('click', () => {
                goToSlideHair(slideNow.hair - 1);
                personArr[0].style.background = constructHairFemale[slideNow.hair];
            });

            //clothes
            function goToSlideClothes(n){
                for (var i = 0; i < childItems[1].length; i++) {
                    childItems[1][i].classList.remove('active');
                }
                clothesStyleFemale[slideNow.clothes].classList.remove('active');
                slideNow.clothes = (n + clothesStyleFemale.length) % clothesStyleFemale.length;
                clothesStyleFemale[slideNow.clothes].classList.add('active');
            }

            nextBtn[2].addEventListener('click', () => {
                goToSlideClothes(slideNow.clothes + 1);
                personArr[1].style.background = constructClothesFemale[slideNow.clothes];
            });
            prevBtn[2].addEventListener('click', () => {
                goToSlideClothes(slideNow.clothes - 1);
                personArr[1].style.background = constructClothesFemale[slideNow.clothes];
            });

        }
    }

    checkSexMale();

    female.addEventListener('click', () => {
        checkSexFemale();
    })
    male.addEventListener('click', () => {
        checkSexMale();
    })
});
