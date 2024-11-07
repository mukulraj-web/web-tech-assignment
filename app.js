const home = document.querySelector(".home")
const hotels = document.querySelector(".hotels")
const homeStay = document.querySelector(".home-stay")


function loadPage(page,link) {
 

    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("content").innerHTML = html;
            setActiveLink(link);
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<h2>Error loading page</h2><p>" + error.message + "</p>";
        });
}
function setActiveLink(link) {
    if (!link) return;
    // Remove the active class from all links
    const links = document.querySelectorAll('.contents');
    links.forEach(l => l.classList.remove('active'));

    // Add the active class only to the clicked link
    link.classList.add('active');
}

// Load the home page by default when the page first loads
window.onload = function() {
  

    const homeLink = document.querySelector('.contents');
    loadPage('home.html');
};