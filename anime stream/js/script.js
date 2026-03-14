function playEpisode(video){
document.getElementById("player").src = video;
}

function searchAnime(){

let input = document.getElementById("search").value.toLowerCase();
let anime = document.getElementsByClassName("anime");

for(let i=0;i<anime.length;i++){

let name = anime[i].innerText.toLowerCase();

if(name.includes(input)){
anime[i].style.display="block";
}else{
anime[i].style.display="none";
}

}

}