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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
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

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navItem = document.getElementsByTagName("a");
navItem[0].innerHTML = "Services";
navItem[1].innerHTML = "Product";
navItem[2].innerHTML = "Vision";
navItem[3].innerHTML = "Features";
navItem[4].innerHTML = "About";
navItem[5].innerHTML = "Contact";

navItem[0].style.color = "green";
navItem[1].style.color = "green";
navItem[2].style.color = "green";
navItem[3].style.color = "green";
navItem[4].style.color = "green";
navItem[5].style.color = "green";

const mainNav = document.querySelector("nav");

const newElement1 = document.createElement("a");
newElement1.href = "#";
newElement1.textContent = "Home";
mainNav.prepend(newElement1);
newElement1.style.color = "green";

const newElement2 = document.createElement("a");
newElement2.href = "#";
newElement2.textContent = "Login";
mainNav.appendChild(newElement2);
newElement2.style.color = "green";


document.querySelector("h1").innerHTML = "DOM<br> IS<br> AWESOME";
document.querySelector("button").innerHTML = "Get Started";

const headings = document.getElementsByTagName("h4");
headings[0].innerHTML = siteContent['main-content']['features-h4'];
headings[1].innerHTML = siteContent['main-content']['about-h4'];
headings[2].innerHTML = siteContent['main-content']['services-h4'];
headings[3].innerHTML = siteContent['main-content']['product-h4'];
headings[4].innerHTML = siteContent['main-content']['vision-h4'];
headings[5].innerHTML = siteContent['contact']['contact-h4'];

const pBodies = document.getElementsByTagName("p");
pBodies[0].innerHTML = siteContent['main-content']['features-content'];
pBodies[1].innerHTML = siteContent['main-content']['about-content'];
pBodies[2].innerHTML = siteContent['main-content']['services-content'];
pBodies[3].innerHTML = siteContent['main-content']['product-content'];
pBodies[4].innerHTML = siteContent['main-content']['vision-content'];
pBodies[5].innerHTML = siteContent['contact']['address'];
pBodies[6].innerHTML = siteContent['contact']['phone'];
pBodies[7].innerHTML = siteContent['contact']['email'];
pBodies[8].innerHTML = siteContent['footer']['copyright'];

