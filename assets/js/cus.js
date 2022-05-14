var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction=== "down"){
            document.querySelector( ".navbar").classList.add("navbar-control");
            document.querySelector( ".navbar").classList.add("animate__fadeInDown");
            document.querySelector( ".navbar").classList.add("shadow-zinc-300");
        }else{
            document.querySelector( ".navbar").classList.remove("navbar-control");
            document.querySelector( ".navbar").classList.remove("animate__fadeInDown");
            document.querySelector( ".navbar").classList.remove("shadow-zinc-300");
        }
    },
    offset: '25%'
})

var waypoint = new Waypoint({
    element: document.getElementById('testimonial'),
    handler: function(direction) {
        if(direction=== "down"){
            document.querySelector(".footer-fixed").classList.add("show");
            document.querySelector( ".footer-fixed").classList.add("animate__fadeInDown");

        }else{
            document.querySelector(".footer-fixed").classList.remove("show");
            document.querySelector( ".footer-fixed").classList.remove("animate__fadeInDown");
        }
    },
    offset: '25%'
})

//Theme

const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.navbar').classList.remove('shadow-lg');
    document.querySelector('.navbar').classList.add('pdf-border-zinc-800');
    document.querySelector('.navbar').classList.add('pdf-bg-zinc-900');
    localStorage.setItem('data-theme','dark');

}

const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.navbar').classList.add('.shadow-lg');
    document.querySelector('.navbar').classList.remove('pdf-border-zinc-800');
    document.querySelector('.navbar').classList.remove('pdf-bg-zinc-900');
    localStorage.setItem('data-theme','light');

}

let changeTheme =document.getElementById('changeTheme');
changeTheme.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if(theme === 'dark'){
        changeThemeToLight();
    }else{
        changeThemeToDark();
    }
})

//menu Icon
let menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('show');
})


let theme = localStorage.getItem('data-theme');
if(theme === 'dark'){
    changeThemeToDark();
    changeTheme.setAttribute('checked', 'checked');
}else {
    changeThemeToLight();
}