export function fetchRepo(language) {
    language = language === 'all' ? '' : language;
    const url = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return fetch(url)
    .then(res => res.json())
    .then(data =>{
        return data.items;
    })
    .catch(err => err);
}