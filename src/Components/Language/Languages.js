import styles from "./styles.module.css";
import cx from 'classnames';
import React from "react";
import { fetchRepo } from "../../api";
import Repository from "../Repository/index";

function LanguageNav({currLang, updateLang}) {

    const langs = ['All','Javascript', 'Java','Python','CSS','Ruby'];

    return (
        <div className = {cx(styles.wrapper)}>
            <ul className = {cx(styles.list)}>
                {langs.map(item => (
                    <li className="list__item" key = {item}>
                        <button 
                            className={cx(styles.btn,{
                                [styles.active] : item.toLowerCase() === currLang.toLowerCase(),
                            })}

                            onClick={() => updateLang(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

class Language extends React.Component {

    constructor(props) {
        super(props);
        this.setRepo = this.setRepo.bind(this);
    }
    
    state = {
        currLang : 'all',
        repos: null,
        err: null,
    }

    setRepo = (lang) => {
        fetchRepo(lang)
        .then(res => {
            if(res) {
                this.setState({
                    ...this.state,
                    repos: res
                })
            }
            else {
                console.log(res);
                this.setState({
                    err: 'NOT FOUND'
                })
            }
        })
        .catch(err => {
            this.setState({
                ...this.state,
                err: 'CAN NOT FETCH REPOS'
            })
        })
    }
    
    updateLang = (lang) => {
        this.setState({
            currLang: lang,
            repos: null,
            err: null
        })
        this.setRepo(lang);
    }

    componentDidMount() {
        this.setRepo(this.state.currLang);
    }

    setLoading = () => {
        return this.state.repos === null && this.state.err === null;
    }

    render() {
        const {repos,err} = this.state;
        console.log('repos',repos)
        return (
            <>
                <LanguageNav 
                    currLang = {this.state.currLang} 
                    updateLang = {this.updateLang}
                />
                {err && <p>{err}</p>}
                {   repos && <Repository repos = {this.state.repos} />}

                {this.setLoading() && <p>Loading...</p>}
                
            </>
        )
    }
}

export default Language;