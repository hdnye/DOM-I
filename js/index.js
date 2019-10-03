const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/*--Add nav styling here--*/

let newNav = document.querySelectorAll('a');
// newNav[0].textContent = siteContent.nav['nav-item-1'];
// newNav[1].textContent = siteContent.nav['nav-item-2'];
// newNav[2].textContent = siteContent.nav['nav-item-3'];
// newNav[3].textContent = siteContent.nav['nav-item-4'];
// newNav[4].textContent = siteContent.nav['nav-item-5'];
// newNav[5].textContent = siteContent.nav['nav-item-6'];

newNav.forEach = siteContent['nav'];
                             

/*--Add title styling here--*/

let newCtaHeader = document.querySelector('h1');
newCtaHeader.textContent = siteContent.cta['h1'];

let newCtaBtn = document.querySelector('button');
newCtaBtn.textContent = 'Get Started';


let newCtaImg = document.getElementById('cta-img');
newCtaImg.setAttribute('src', siteContent['cta']['img-src'])


/*--Add Main Content styling here-- */

let newMain = document.querySelectorAll('.top-content .text-content h4');
newMain[0].textContent = siteContent['main-content']['features-h4'];
newMain[1].textContent = siteContent['main-content']['about-h4'];

let newMnTwo = document.querySelectorAll('.top-content .text-content p');
newMnTwo[0].textContent = siteContent['main-content']['features-content'];
newMnTwo[1].textContent = siteContent['main-content']['about-content'];

let newMidImg = document.getElementById('middle-img');
newMidImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


/*--Add Bottom Styling here-- */

let newBtm = document.querySelectorAll('.bottom-content .text-content h4');
newBtm[0].textContent = siteContent['main-content']['services-h4'];
newBtm[1].textContent = siteContent['main-content']['product-h4'];
newBtm[2].textContent = siteContent['main-content']['vision-h4'];

let newBtmThree = document.querySelectorAll('.bottom-content .text-content p');
newBtmThree[0].textContent = siteContent['main-content']['services-content'];
newBtmThree[1].textContent = siteContent['main-content']['product-content'];
newBtmThree[2].textContent = siteContent['main-content']['vision-content'];

/*--Add Contact Styling here--*/

