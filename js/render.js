const h1DOM = document.querySelector('h1');

h1DOM.innerText = 'Movies... 👀';

const movies = [ 
   'Matrix',
    'Walker',
    'Shrek',
    'Cars',
    'Sphere',
];

const ulDOM = document.getElementsByTagName('ul')[0];

let moviesHTML = '';

for (let i = 0; i < movies.length; i++) {
    const movieTitle = movies[i];
    moviesHTML += `<li>${movieTitle}</li>`;
}

ulDOM.innerHTML = moviesHTML;
