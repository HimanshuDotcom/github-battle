export function fetchRepo(language) {
    console.log(language);
    language = language === 'all' ? '' : language;
    const url = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return fetch(url)
    .then(res => res.json())
    .then(data => data.items)
    .catch(err => err);
}

export function fetchProfile(user) {
    const url = window.encodeURI(`https://api.github.com/users/${user}`)
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => err)
}