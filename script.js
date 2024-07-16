
ssswindow.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const fecebook = document.getElementById('fecebook');

fecebook.addEventListener('click', function(){
    window.location.href = 'https://www.facebook.com/muriel.ribeiro.75/about'
});

const instagram = document.getElementById('instagram');

instagram.addEventListener('click', function(){
    window.location.href = "https://www.instagram.com/muriel.god/"
});

const linkedin = document.getElementById('linkedin');

linkedin.addEventListener('click', function(){
    window.location.href = "https://www.linkedin.com/in/muriel-r-galdino-0147b6224/"
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GCLHRK6ERF');

