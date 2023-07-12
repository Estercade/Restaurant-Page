const content = document.getElementById('content');

const header = (function() {
    renderHeader = function() {
        const header = document.createElement('header');

        const logo = document.createElement('img');
        logo.src = "./omakaselogo.png";
        logo.alt = "O - Ma - Kase logo";
        header.appendChild(logo);

        const nav = document.createElement('div');

        const homeBtn = document.createElement('button');
        homeBtn.type = "button";
        homeBtn.name = "home-btn";
        homeBtn.id = "home-btn";
        homeBtn.innerText = "Home";
        nav.appendChild(homeBtn);

        const menuBtn = document.createElement('button');
        menuBtn.type = "button";
        menuBtn.name = "menu-btn";
        menuBtn.id = "menu-btn";
        menuBtn.innerText = "Menu";
        nav.appendChild(menuBtn);

        const contactBtn = document.createElement('button');
        contactBtn.type = "button";
        contactBtn.name = "contact-btn";
        contactBtn.id = "contact-btn";
        contactBtn.innerText = "Contact Us";
        nav.appendChild(contactBtn);
    
        header.appendChild(nav);

        _attachHeaderEventListeners(homeBtn, menuBtn, contactBtn);

        return header;
    };

    const _attachHeaderEventListeners = function(homeBtn, menuBtn, contactBtn) {
        homeBtn.addEventListener('click', openHome);
        menuBtn.addEventListener('click', openMenu);
        contactBtn.addEventListener('click', openContact);
    }

    const openHome = function() {
        console.log('home');
    }

    const openMenu = function() {
        console.log('menu');
    }

    const openContact = function() {
        console.log('contact us');
    }

    return { renderHeader };
})();

const landing = (function() {
    renderAbout = function() {
        const aboutWrapper = document.createElement('div');
        aboutWrapper.id = "about-wrapper";

        const aboutHeader = document.createElement('h3');
        aboutHeader.innerText = 'About';
    
        const about1 = document.createElement('p');
        about1.innerText = 'Omakase is a Japanese phrase which translates to "I leave it up to you." It is a term typically used in Japanese restaurants where the details of the meal are left up to the chef, who chooses seasonal specialties based on the highest quality ingredients available at the time.';
    
        const about2 = document.createElement('p');
        about2.innerText = 'O - MA - KASE is a Japanese-style restaurant that aims to bring that authentic, personalized dining experience from the streets of Tokyo to your neighborhood.';
        
        aboutWrapper.appendChild(aboutHeader);
        aboutWrapper.appendChild(about1);
        aboutWrapper.appendChild(about2);
    
        return aboutWrapper;
    };

    return { renderAbout };
})();

const menu = (function() {
    renderMenu = function() {
        const menuWrapper = document.createElement('div');
        menuWrapper.id = 'menu-wrapper';
        
        const menuHeader = document.createElement('h3');
        menuHeader.innerText = 'Menu';
        menuWrapper.appendChild(menuHeader);

        const menuList = document.createElement('ul');

        menuList.appendChild(_addMenuItem1());
        menuList.appendChild(_addMenuItem2());

        menuWrapper.appendChild(menuList);

        return menuWrapper;
    }

    _addMenuItem1 = function(){
        const item1 = document.createElement('li');
        const item1Name = document.createElement('h4');
        item1Name.innerText = 'Ramen Omakase';
        
        const item1Desc = document.createElement('p');
        item1Desc.innerText = "Multi-course meal consisting of a seasonal salad made with locally sourced produce followed by a selection of the chef's choice of gourmet ramen with handmade noodles and locally sourced meat then finished with a seasonal dessert. Vegetarian options and beverage pairing available."
        
        item1.appendChild(item1Name);
        item1.appendChild(item1Desc);

        return item1;
    }
    
    _addMenuItem2 = function(){
        const item2 = document.createElement('li');
        const item2Name = document.createElement('h4');
        item2Name.innerText = 'Sushi Omakase';
        
        const item2Desc = document.createElement('p');
        item2Desc.innerText = "Multi-course meal consisting of approximately twenty pieces of nigiri sushi made with fish and shellfish sourced globally followed by tamago then finished with a seasonal dessert. Beverage pairing available."

        item2.appendChild(item2Name);
        item2.appendChild(item2Desc);

        return item2;
    }

    return { renderMenu };
})();

const contact = (function() {
    const _renderLocationInfo = function() {
        const locationCard = document.createElement('ul');
        locationCard.id = 'location-card';

        const locationTitleWrapper = document.createElement('li');
        locationTitle = document.createElement('h4');
        locationTitle.innerText = 'Address:';
        locationTitleWrapper.appendChild(locationTitle);
        locationCard.appendChild(locationTitle);

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
        locationLink.href = "https://goo.gl/maps/iH7aiyujwQ9AQ69E8";
        locationLink.target = "_blank";
        locationLink.rel = "noopener noreferrer";
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
        contactMeTitle = document.createElement('h4');
        contactMeTitle.innerText = 'For business inquiries:';
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
        contactMeGit.appendChild(gitLink);
        contactMeCard.appendChild(contactMeGit);

        return contactMeCard;
    }

    const renderContactUs = function() {
        const contactWrapper = document.createElement('div');
        contactWrapper.id = 'contact-wrapper';
        
        const contactHeader = document.createElement('h3');
        contactHeader.innerText = 'Contact Us';
        contactWrapper.appendChild(contactHeader);

        contactWrapper.appendChild(_renderLocationInfo());
        contactWrapper.appendChild(_renderContactMe());

        return contactWrapper;
    }

    return { renderContactUs };
})();

content.appendChild(header.renderHeader());
content.appendChild(landing.renderAbout());
content.appendChild(menu.renderMenu());
content.appendChild(contact.renderContactUs());