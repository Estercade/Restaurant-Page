const content = document.getElementById('content');

const header = (function() {
    renderHeader = function() {
        const header = document.createElement('header');
    
        const logo = document.createElement('img');
        logo.src = "./omakaselogo.png";
        logo.alt = "O - Ma - Kase logo";
        header.appendChild(logo);

        const homeBtn = document.createElement('button');
        homeBtn.type = "button";
        homeBtn.name = "homeBtn";
        homeBtn.innerText = "Home";
        header.appendChild(homeBtn);

        const menuBtn = document.createElement('button');
        menuBtn.type = "button";
        menuBtn.name = "menuBtn";
        menuBtn.innerText = "Menu";
        header.appendChild(menuBtn);

        const contactBtn = document.createElement('button');
        contactBtn.type = "button";
        contactBtn.name = "contactBtn";
        contactBtn.innerText = "Contact Us";
        header.appendChild(contactBtn);
    
        return header;
    };
    return { renderHeader };
})();

const landing = (function() {
    renderMainContent = function() {
        const body = document.createElement('div');
        const about = document.createElement('div');
        const aboutHeader = document.createElement('h3');
        aboutHeader.innerText = 'About';
    
        const about1 = document.createElement('p');
        about1.innerText = 'Omakase is a Japanese phrase which translates to "I leave it up to you." It is a term typically used in Japanese restaurants where the details of the meal are left up to the chef, who chooses seasonal specialties based on the highest quality ingredients available at the time.';
    
        const about2 = document.createElement('p');
        about2.innerText = 'O - Ma - Kase is a Japanese-style restaurant that aims to bring that authentic, personalized dining experience from the streets of Tokyo to your neighborhood.';
        
        about.appendChild(aboutHeader);
        about.appendChild(about1);
        about.appendChild(about2);
    
        body.appendChild(about);
    
        return body;
    };

    return { renderMainContent };
})();

content.appendChild(header.renderHeader());
content.appendChild(landing.renderMainContent());