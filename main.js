document.addEventListener("DOMContentLoaded", function () {

    const nome = document.getElementById('nome');
    const avatar = document.getElementById('avatar');
    const username = document.getElementById('username');
    const repositorios = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');
    const endpoint = "https://api.github.com/users/EmersonCilia";

    fetch(endpoint)
        .then(res => {
            if (!res.ok) {
                throw new Error("Erro na resposta da API");
            }
            return res.json();
        })
        .then(data => {
            nome.innerText = data.name
            avatar.alt = `avatar de ${data.name}`
            avatar.src = data.avatar_url;
            username.innerText = data.login;
            repositorios.innerText = data.public_repos;
            seguidores.innerText = data.followers;
            seguindo.innerText = data.following;
            link.href = data.html_url;

        })
        .catch(error => {
            alert(`Erro ao carregar seus dados.\nVerifique sua conexão com a internet ou tente novamente mais tarde.`);
            console.error(error);
        });
});