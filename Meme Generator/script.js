const button = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorName = document.querySelector('.author');

function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {author,title,url} = data;
        console.log(author,title,url);
        memeTitle.innerText = title;
        memeImage.src = url;
        authorName.innerText = `Meme By: ${author}`;

    })
}

getMeme();

button.addEventListener('click',()=>{
    getMeme();
});