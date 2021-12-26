var elHeaderSection = document.querySelector('.site-header');
var elHeaderButton = elHeaderSection.querySelector('.site-header__button');


if(elHeaderButton){
  elHeaderButton.addEventListener('click', function() {
    elHeaderSection.classList.toggle('header-open');
  });
}