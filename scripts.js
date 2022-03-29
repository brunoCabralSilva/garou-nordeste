
menuTitulos = {
    nomeLinksMenu: ['Início','Quem Somos', 'Podcasts', 'O que é', 'Tribos', 'Augúrios', 'Parceiros'],
    linksMenu: ['index.html','quem_somos.html', 'podcasts.html', 'o_que_e.html', 'tribos.html', 'augurios.html', 'parceiros.html']
};

reDesSociais = {
    linkRedeSocial: ['https://www.instagram.com/garounordeste/', 'https://open.spotify.com/show/7kal4LDO3ptHc3sG64btYI?si=f1a9215608f24501', 'https://m.facebook.com/garounordeste/', 'https://www.youtube.com/channel/UCcIANx8yakWcZaijRNTreEQ'],
    iconeRedeSocial: ['imagens/icones/instagram.png', 'imagens/icones/Spotify.png', 'imagens/icones/facebook.png', 'imagens/icones/youtube.png']   
}

let podcast = [
    {
        nome: 'Fome Insaciável',
        imagensPodcast: 'imagens/podcasts/Fome Insaciável02insta.png',
        linkImagensPodcastSpotify: 'https://open.spotify.com/episode/1IlfAm2S5iJa6kZa7vr9XZ?si=Azte_bqgQ96hr7UOnyksFA',
        linkImagensPodcastYoutube: 'https://www.youtube.com/watch?v=YrMxuii9Ufc'
    },
    {
        nome: 'Nas veredas do Apocalipse e da Destituição',
        imagensPodcast: 'imagens/podcasts/Nas veredas do apocalipse e da destituição insta.png',
        linkImagensPodcastSpotify: 'https://open.spotify.com/episode/4Ii8m6Umzs1qc56iV3Ivty?si=7b904ed1938f42c1',
        linkImagensPodcastYoutube: 'https://www.youtube.com/watch?v=FltomjvNoi8&t=94s'
    },
    {
        nome: 'Passos cegos vacilantes',
        imagensPodcast: 'imagens/podcasts/Passos Cegos Vacilantes - 2.png',
        linkImagensPodcastSpotify: 'https://open.spotify.com/episode/0glKL8XccESAXuPNbTi2Fv?si=1eeff9b975a445b1',
        linkImagensPodcastYoutube: 'https://www.youtube.com/watch?v=mYpCNU_gow0&t=34s'
    },
    {
        nome: 'Terror no Casarão',
        imagensPodcast: 'imagens/podcasts/Terror no Casarão 02.png',
        linkImagensPodcastSpotify: 'https://open.spotify.com/episode/68QTPVuMSfIqYVCnkGWqjo?si=ad3015a3c4f9413a',
        linkImagensPodcastYoutube: 'https://www.youtube.com/watch?v=_tvxY6gy4q4&t=13s'
    },
]

let imagemDeTitulo = ["url('imagens/imagensTitulo/Fome Insaciável.png')", "url('imagens/imagensTitulo/TheWerewolf.jpg')", "url('imagens/imagensTitulo/werewolfTheGame.jpg')", "url('imagens/imagensTitulo/TyzP5si.jpeg')", "url('imagens/imagensTitulo/d0755ea4f3d6d71cda9982997b245f37.jpg')", "url('imagens/imagensTitulo/5150d1aeefbff58c31e9796250d93f3f.jpg')"];

let linkPodcastsEscolhido = [];
let countBotao = 0;

let barraDeMenu = document.getElementsByClassName('barra_de_menu')[0];

for (let i = 0; i < menuTitulos.nomeLinksMenu.length; i += 1) {

    let novaLi = document.createElement('li');
    novaLi.setAttribute('class', 'barraDeNavegacao');
    barraDeMenu.appendChild(novaLi);

    let getLi = document.getElementsByClassName('barraDeNavegacao')[i];
    let novoLink = document.createElement('a');
    novoLink.setAttribute('class', 'linksDoMenu');
    novoLink.innerText = menuTitulos.nomeLinksMenu[i];
    novoLink.href = menuTitulos.linksMenu[i];
    getLi.appendChild(novoLink);

}

for (let i = 0; i < reDesSociais.linkRedeSocial.length; i += 1) {

    let liRedesSociais = document.createElement('li');
    liRedesSociais.setAttribute('class', 'barra_de_links');
    barraDeMenu.appendChild(liRedesSociais);

    let getLiRedesSociais = document.getElementsByClassName('barra_de_links')[i];
    let linkRedesSociais = document.createElement('a');
    linkRedesSociais.setAttribute('class', 'linksRedesSociais');
    linkRedesSociais.href = reDesSociais.linkRedeSocial[i];;
    linkRedesSociais.target = '_blank';
    getLiRedesSociais.appendChild(linkRedesSociais);

    let getA = document.getElementsByClassName('linksRedesSociais')[i];
    let novaImagemRedesSociais = document.createElement('img');
    novaImagemRedesSociais.src = reDesSociais.iconeRedeSocial[i];
    novaImagemRedesSociais.alt = 'Links para redes sociais';
    novaImagemRedesSociais.style.width = '25px';
    getA.appendChild(novaImagemRedesSociais);

}

for (let j = 0; j < menuTitulos.nomeLinksMenu.length; j += 1) {

    let eventosLink = document.getElementsByClassName('linksDoMenu')[j];

    eventosLink.addEventListener('mouseover', function () {
        eventosLink.style.backgroundColor = 'rgb(116, 102, 102)';
        eventosLink.style.color = 'black';
    });

    eventosLink.addEventListener('mouseleave', function () {
        eventosLink.style.backgroundColor = 'black';
        eventosLink.style.color = 'rgb(116, 102, 102)';
    });
}

let header = document.getElementById('pagina_index');
header.style.backgroundImage = imagemDeTitulo[countBotao];

let setaDireita = document.getElementById('setaDireita');
setaDireita.addEventListener('click', function () {
    countBotao += 1;

    if (countBotao < imagemDeTitulo.length) {
        header.style.backgroundImage = imagemDeTitulo[countBotao];
    }
    else if (countBotao === imagemDeTitulo.length) {
        countBotao = 0;
        header.style.backgroundImage = imagemDeTitulo[countBotao];
    }
    else {
        countBotao = 0;
        header.style.backgroundImage = imagemDeTitulo[countBotao];
    }
});

let icone_youtube = document.getElementById('icone_youtube');

icone_youtube.addEventListener('mouseover', function () {
    icone_youtube.style.backgroundColor = 'red';
});

icone_youtube.addEventListener('mouseleave', function () {
    icone_youtube.style.backgroundColor = 'rgb(87, 1, 1)';
});

let icone_spotify = document.getElementById('icone_spotify');

icone_spotify.addEventListener('mouseover', function () {
    icone_spotify.style.backgroundColor = 'green';
});

icone_spotify.addEventListener('mouseleave', function () {
    icone_spotify.style.backgroundColor = 'rgb(1, 46, 1)';
});


let sectionCadaNovidade = document.getElementById('podcasts_dinamicos');

for (let i = 0; i < podcast.length; i += 1) {

    let novaSection = document.createElement('section');
    novaSection.setAttribute('class', 'cada_novidade');
    sectionCadaNovidade.appendChild(novaSection);

    let getSection = document.getElementsByClassName('cada_novidade')[i];
    let linkCriado = document.createElement('a');
    linkCriado.target = '_blank';
    linkCriado.setAttribute('class', 'linkPodcastAnuncio');
    getSection.appendChild(linkCriado);

    let cada_link = document.getElementsByClassName('linkPodcastAnuncio')[i];
    let cadaPodcast = document.createElement('img');
    cadaPodcast.src = podcast[i].imagensPodcast;
    cadaPodcast.setAttribute('class', 'imagemPodcast');
    cadaPodcast.style.width = '100%';
    cada_link.appendChild(cadaPodcast);
}


for (let i = 0; i <= 3; i += 1) {

    let cada_Novidade = document.getElementsByClassName('cada_novidade')[i];

    icone_spotify.addEventListener('click', function () {


        for (let i = 0; i < podcast.length; i += 1) {
            let recebeLink = document.getElementsByClassName('linkPodcastAnuncio')[i];
            recebeLink.href = podcast[i].linkImagensPodcastSpotify;
        }

        cada_Novidade.addEventListener('mouseover', function () {
            cada_Novidade.style.opacity = '0.7';
            cada_Novidade.style.border = '2px solid green';
        });

        cada_Novidade.addEventListener('mouseleave', function () {
            cada_Novidade.style.opacity = '1';
            cada_Novidade.style.border = '1px solid transparent';
        });

    });

    icone_youtube.addEventListener('click', function () {

        for (let i = 0; i < podcast.length; i += 1) {
            let recebeLink = document.getElementsByClassName('linkPodcastAnuncio')[i];
            recebeLink.href = podcast[i].linkImagensPodcastYoutube;
        }

        cada_Novidade.addEventListener('mouseover', function () {
            cada_Novidade.style.opacity = '0.7';
            cada_Novidade.style.border = '2px solid red';
        });

        cada_Novidade.addEventListener('mouseleave', function () {
            cada_Novidade.style.opacity = '1';
            cada_Novidade.style.border = '1px solid transparent';
        });

    });
}
