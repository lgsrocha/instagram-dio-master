//pegando os estilos listados no CSS
var estilos = document.querySelector(':root ');

//variavel para teste de cores
var testeCores = getComputedStyle(estilos);

//Ajusta o texto do botão de acordo com o tema padrão
function darkModeHtml(){
    if (testeCores.getPropertyValue("--get-the-app-color") === ("none")){
        button.innerHTML = "Dark Mode &#127770";    
    } else button.innerHTML = "Light Mode &#127773";
}

//Checa se o darkmode está ativo e muda o tema
function darkMode(){
    if (testeCores.getPropertyValue("--get-the-app-color") === ("none")){
        changeThemeDark();    
    } else changeThemeLight();
}

//Muda as variáveis de cores e imagens para darkMode
function changeThemeDark(){
    estilos.style.setProperty('--insta-logo', 'url(./img/instagram-logo2.png)');
    estilos.style.setProperty('--img-google', 'url(./img/googleplay-button3.png)');
    estilos.style.setProperty('--img-apple', 'url(./img/apple-button2.png)');  
    estilos.style.setProperty('--body-bg-color', '#242424');
    estilos.style.setProperty('--group-border-color', '#696767');  
    estilos.style.setProperty('--group-bg-color', '#121212');
    estilos.style.setProperty('--login-color', '#F9FDFF');
    estilos.style.setProperty("--not-account-color", "#F9FDFF");
    estilos.style.setProperty("--get-the-app-color", "white");
    estilos.style.setProperty("--theme-button", "./img/Sol.png");
    button.innerHTML = "Light Mode &#127773";
}

function changeThemeLight(){
    estilos.style.setProperty('--insta-logo', 'url(./img/instagram-logo.png)');
    estilos.style.setProperty('--img-google', 'url(./img/googleplay-button.png)');
    estilos.style.setProperty('--img-apple', 'url(./img/apple-button.png)');  
    estilos.style.setProperty('--body-bg-color', 'rgb(243, 243, 243)');
    estilos.style.setProperty('--group-border-color', 'lightgray');  
    estilos.style.setProperty('--group-bg-color', '#ffffff');
    estilos.style.setProperty('--login-color', '#ffffff');
    estilos.style.setProperty("--not-account-color", "rgb(160, 160, 160)");
    estilos.style.setProperty("--get-the-app-color", "none");
    estilos.style.setProperty("--theme-button", "./img/Lua.png");
    button.innerHTML = "Dark Mode &#127770" ;
}


const button = document.getElementById('theme-selector');

button.addEventListener('click', darkMode);
