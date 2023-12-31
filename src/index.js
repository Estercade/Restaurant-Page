import './style.css';
import OmakaseLogo from './omakaselogo.png';
import InstagramLogo from './instagram.svg';
import FacebookLogo from './facebook.svg';

const content = document.getElementById('content');

const header = (function() {
    const btnList = [];

    const _generateNav = function() {
        const nav = document.createElement('div');
        nav.id = 'nav';

        const aboutBtn = document.createElement('button');
        aboutBtn.type = 'button';
        aboutBtn.name = 'about-btn';
        aboutBtn.id = 'about-btn';
        aboutBtn.innerText = 'ABOUT';
        // aboutBtn is the landing page so is defaulted to active
        aboutBtn.classList = 'active-section';
        nav.appendChild(aboutBtn);
        btnList.push(aboutBtn);

        const menuBtn = document.createElement('button');
        menuBtn.type = 'button';
        menuBtn.name = 'menu-btn';
        menuBtn.id = 'menu-btn';
        menuBtn.innerText = 'MENU';
        nav.appendChild(menuBtn);
        btnList.push(menuBtn);

        const contactBtn = document.createElement('button');
        contactBtn.type = 'button';
        contactBtn.name = 'contact-btn';
        contactBtn.id = 'contact-btn';
        contactBtn.innerText = 'CONTACT US';
        nav.appendChild(contactBtn);
        btnList.push(contactBtn);

        _attachHeaderEventListeners();

        return nav;
    };

    const _attachHeaderEventListeners = function() {
        btnList.forEach((btn) => {
            btn.addEventListener('click', _clearActiveSection);
            btn.addEventListener('click', renderPageHandler.showSection);
        })
    }

    const _clearActiveSection = function() {
        btnList.forEach((btn) => {
            btn.classList = "";
        })
    }

    const _generateSocials = function() {
        const socialsWrapper = document.createElement('div');
        socialsWrapper.id = 'socials-wrapper';

        const instagramLink = document.createElement('a');
        instagramLink.href = 'https://www.instagram.com/O.MA.KASE_NYC/';
        instagramLink.target = '_blank';
        instagramLink.rel = 'noopener noreferrer';
        const instagramIcon = document.createElement('img');
        instagramIcon.src = InstagramLogo;
        instagramIcon.alt = 'Instagram Icon';
        instagramIcon.id = 'instagram-icon';
        instagramLink.appendChild(instagramIcon);
        socialsWrapper.appendChild(instagramLink);

        const facebookLink = document.createElement('a');
        facebookLink.href = 'https://www.facebook.com/O.MA.KASE_NYC/';
        facebookLink.target = '_blank';
        facebookLink.rel = 'noopener noreferrer';
        const facebookIcon = document.createElement('img');
        facebookIcon.src = FacebookLogo;
        facebookIcon.alt = 'Facebook Icon';
        facebookIcon.id = 'facebook-icon';
        facebookLink.appendChild(facebookIcon);
        socialsWrapper.appendChild(facebookLink);

        return socialsWrapper;
    }

    const _generateLogo = function() {
        const logoWrapper = document.createElement('div');
        logoWrapper.id = 'logo-wrapper';

        const logo = document.createElement('img');
        logo.src = OmakaseLogo;
        logo.alt = 'O - Ma - Kase logo';
        logo.id = 'omakase-logo';
        logoWrapper.appendChild(logo);
        
        return logoWrapper;
    }

    const generateHeader = function() {
        const header = document.createElement('header');
        header.id = 'header';
        
        header.appendChild(_generateLogo());
        header.appendChild(_generateNav());
        header.appendChild(_generateSocials());

        return header;
    }

    return { generateHeader };
})();

const landing = (function() {
    const generateAbout = function() {
        const aboutWrapper = document.createElement('div');
        aboutWrapper.id = 'about-wrapper';

        const aboutHeader = document.createElement('h2');
        aboutHeader.innerText = 'ABOUT';
    
        const about1 = document.createElement('p');
        about1.innerText = 'Omakase is a Japanese phrase which translates to "I leave it up to you." It is a term typically used in Japanese restaurants where the details of the meal are left up to the chef, who chooses seasonal specialties based on the highest quality ingredients available at the time.';
    
        const about2 = document.createElement('p');
        about2.innerText = 'O - MA - KASE is a Japanese-style restaurant that aims to bring that authentic, personalized dining experience from the streets of Tokyo to your neighborhood.';
        
        aboutWrapper.appendChild(aboutHeader);
        aboutWrapper.appendChild(about1);
        aboutWrapper.appendChild(about2);
    
        return aboutWrapper;
    };

    return { generateAbout };
})();

const menu = (function() {
    const generateMenu = function() {
        const menuWrapper = document.createElement('div');
        menuWrapper.id = 'menu-wrapper';
        
        const menuHeader = document.createElement('h2');
        menuHeader.innerText = 'MENU';
        menuWrapper.appendChild(menuHeader);

        const menuList = document.createElement('ul');

        menuList.appendChild(_addMenuItem1());
        menuList.appendChild(_addMenuItem2());

        menuWrapper.appendChild(menuList);

        return menuWrapper;
    }

    const _addMenuItem1 = function(){
        const item1 = document.createElement('li');
        const item1Name = document.createElement('h4');
        item1Name.innerText = 'Ramen Omakase';
        
        const item1Desc = document.createElement('p');
        item1Desc.innerText = "Multi-course meal consisting of a seasonal salad made with locally sourced produce followed by a selection of the chef's choice of gourmet ramen with handmade noodles and locally sourced meat then finished with a seasonal dessert. Vegetarian options and beverage pairing available."
        
        item1.appendChild(item1Name);
        item1.appendChild(item1Desc);

        return item1;
    }
    
    const _addMenuItem2 = function(){
        const item2 = document.createElement('li');
        const item2Name = document.createElement('h4');
        item2Name.innerText = 'Sushi Omakase';
        
        const item2Desc = document.createElement('p');
        item2Desc.innerText = 'Multi-course meal consisting of approximately twenty pieces of nigiri sushi made with fish and shellfish sourced globally followed by tamago then finished with a seasonal dessert. Beverage pairing available.'

        item2.appendChild(item2Name);
        item2.appendChild(item2Desc);

        return item2;
    }

    return { generateMenu };
})();

const contact = (function() {
    const _renderLocationInfo = function() {
        const locationCard = document.createElement('ul');
        locationCard.id = 'location-card';

        const locationTitleWrapper = document.createElement('li');
        const locationTitle = document.createElement('h4');
        locationTitle.innerText = 'ADDRESS:';
        locationTitleWrapper.appendChild(locationTitle);
        locationCard.appendChild(locationTitleWrapper);

        const locationName = document.createElement('li');
        locationName.innerText = 'O - MA - KASE';
        locationCard.appendChild(locationName);

        const locationPhoneNumber = document.createElement('li');
        const locationPhoneLink = document.createElement('a');
        locationPhoneLink.innerText = '1-555-555-5555';
        locationPhoneLink.href = 'tel:+1-555-555-5555';
        locationPhoneNumber.appendChild(locationPhoneLink);
        locationCard.appendChild(locationPhoneNumber);

        const locationAddressWrapper = document.createElement('li');
        const locationLink = document.createElement('a');
        locationLink.innerText = '15121 123rd Street\nNew York, NY 101880'
        locationLink.href = 'https://goo.gl/maps/iH7aiyujwQ9AQ69E8';
        locationLink.target = '_blank';
        locationLink.rel = 'noopener noreferrer';
        locationAddressWrapper.appendChild(locationLink);
        locationCard.appendChild(locationAddressWrapper);

        const locationHours = document.createElement('li');
        locationHours.innerText = 'Open Wednesday through Saturday\n5:00 PM to 11:00 PM';
        locationCard.appendChild(locationHours);

        return locationCard;
    }

    const _renderContactMe = function() {        
        const contactMeCard = document.createElement('ul');
        contactMeCard.id = 'contact-me-card';

        const contactMeTitleWrapper = document.createElement('li');
        const contactMeTitle = document.createElement('h4');
        contactMeTitle.innerText = 'FOR BUSINESS INQUIRIES:';
        contactMeTitleWrapper.appendChild(contactMeTitle);
        contactMeCard.appendChild(contactMeTitleWrapper);

        const contactMeName = document.createElement('li');
        contactMeName.innerText = 'Wilson Lee';
        contactMeCard.appendChild(contactMeName);

        const contactPhoneNumber = document.createElement('li');
        const myPhoneLink = document.createElement('a');
        myPhoneLink.innerText = '1-555-555-5556';
        myPhoneLink.href = 'tel:+1-555-555-5556';
        contactPhoneNumber.appendChild(myPhoneLink);
        contactMeCard.appendChild(contactPhoneNumber);

        const contactMeEmail = document.createElement('li');
        const emailLink = document.createElement('a');
        emailLink.innerText = 'wilsonlee093@gmail.com';
        emailLink.href = 'mailto:wilsonlee093@gmail.com';
        contactMeEmail.appendChild(emailLink);
        contactMeCard.appendChild(contactMeEmail);

        const contactMeGit = document.createElement('li');
        const gitLink = document.createElement('a');
        gitLink.innerText = 'https://github.com/Estercade';
        gitLink.href = 'https://github.com/Estercade';
        gitLink.target = '_blank';
        gitLink.rel = 'noopener noreferrer';
        contactMeGit.appendChild(gitLink);
        contactMeCard.appendChild(contactMeGit);

        return contactMeCard;
    }

    const generateContactUs = function() {
        const contactWrapper = document.createElement('div');
        contactWrapper.id = 'contact-wrapper';
        
        const contactHeader = document.createElement('h2');
        contactHeader.innerText = 'CONTACT US';
        contactWrapper.appendChild(contactHeader);

        contactWrapper.appendChild(_renderLocationInfo());
        contactWrapper.appendChild(_renderContactMe());

        return contactWrapper;
    }

    return { generateContactUs };
})();

const renderPageHandler = (function() {
    const wrapperList = [];

    const _renderHeader = function() {
        content.appendChild(header.generateHeader());
    }
    
    const _renderAbout = function() {
        const aboutElement = landing.generateAbout();
        content.appendChild(aboutElement);
        wrapperList.push(aboutElement);
    }
    
    const _renderMenu = function() {
        const menuElement = menu.generateMenu();
        content.appendChild(menuElement);
        wrapperList.push(menuElement);
    }

    const _renderContactUs = function() {
        const contactUsElement = contact.generateContactUs();
        content.appendChild(contactUsElement);
        wrapperList.push(contactUsElement);
    }

    const _clearContent = function(event) {
        wrapperList.forEach((wrapper) => {
            wrapper.style.display = 'none';
            wrapper.classList = '';
        })
    }

    const showSection = function(e) {
        e.target.classList = 'active-section';
        _clearContent();
        // targetSection obtains the name of the desired section by
        // slicing the name of the target and using index of 0
        // to get rid of '-btn' in the button id
        let targetSection = document.getElementById(`${e.target.id.split('-')[0]}-wrapper`);
        targetSection.style.display = 'block';
    }

    const renderPage = function() {
        _renderHeader();
        _renderMenu();
        _renderContactUs();
        // Clear content first then render about section last
        // as the about section will be the default landing page
        _clearContent();
        _renderAbout();
    }

    return {
        renderPage,
        showSection,
    }
})();

renderPageHandler.renderPage();