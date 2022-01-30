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
    .then(data => {
        if(data.message)
            return data.message;
        else {
            console.log('profile',data);
            return data;
        }
    })
    .catch(err => err)
}

function fetchUserRepo(user) {
    return fetch(`https://api.github.com/users/${user}/repos`)
            .then(res => res.json())
            .then(data => {
                if(data.message)
                    return 'Error Fetching Repos'
                else {
                    console.log('repos',data);
                    return data;
                }
            })
            .catch(err => err)
}

function calculateStars(repos) {
    return repos.reduce((count,curr) => {
        return count + curr.stargazers_count;
    },0)
}

export function getScore(user) {
    return Promise.all([
        fetchProfile(user),
        fetchUserRepo(user)
    ]).then(([profile,repos]) => {
       return profile.followers + calculateStars(repos);
    })
}

export function calculateScore(player1,player2) {
    return Promise.all([
        getScore(player1),
        getScore(player2)
    ])
    .then(res => {
        console.log(res);
        return res;
    })
}