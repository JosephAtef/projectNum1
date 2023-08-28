window.onload = () => {
    let templateBtn = document.querySelector('.home-container .btn1');
    let home = document.querySelector('app-home');
    let theMenuItems = document.querySelector('.computer-nav').children;

    templateBtn.onclick = () => {
        home.style = 'display:none;'
    }
    if (window.innerWidth > 1000) {
        for (let i = 0; i < 3; i++) {
            theMenuItems[i].onclick = () => {
                home.style = 'display:none;'
            }
        }

    } else {
        let menuIcon = document.querySelector('#menu-bar');
        menuIcon.addEventListener('click', runMenu);

    }


}


function runMenu() {
    let menuIcon = document.querySelector('#menu-bar');
    let theMenu = document.querySelector('.phone-nav');
    let theMenuItems = document.querySelector('.phone-nav').children;
    let contactlink = document.querySelector('#contactMenu');
    let contactMenu = document.querySelector('.contact-insider-link');
    let home = document.querySelector('app-home');
    menuIcon.classList.toggle('fa-times');
    if (menuIcon.className.includes('fa-times')) {
        showMenu(theMenu);
        theMenuItems[0].addEventListener('click', hide);
        theMenuItems[1].addEventListener('click', hide);
        theMenuItems[2].addEventListener('click', hide);

        function hide() {
            menuIcon.classList.remove('fa-times');
            hideMenu(theMenu);
            hideMenu(contactMenu);
            home.style = 'display:none;'
        }

        contactlink.addEventListener('click', contctMenuRun);

        function contctMenuRun() {
            contactlink.classList.add('active')
            if (contactlink.className.includes('active')) {
                showMenu(contactMenu);
            }
        }
    } else {
        hideMenu(theMenu);
        hideMenu(contactMenu);
    }
}



function hideMenu(menu) {
    menu.style = 'transform: rotateX(90deg)';
}

function showMenu(menu) {
    menu.style = 'transform: rotateX(0deg)';
}
window.onscroll = () => {
    let menuIcon = document.querySelector('#menu-bar');
    let theMenu = document.querySelector('.phone-nav');
    let contactMenu = document.querySelector('.contact-insider-link');
    menuIcon.classList.remove('fa-times');
    hideMenu(theMenu);
    hideMenu(contactMenu);


}

/*####################################### separator ###################################*/
/*####################################### separator ###################################*/
