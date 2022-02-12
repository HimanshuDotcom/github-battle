import styles from "./styles.module.css";
import cx from 'classnames';
import React from "react";
import { fetchRepo } from "../../api";
import Repository from "../Repository/index";
import Loading from "../Loading/index";

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
        repos: {},
        err: null,
    }

    setRepo = (lang) => {
        fetchRepo(lang)
        .then(res => {
            if(res) {
                this.setState({
                    repos: {
                        ...this.state.repos,
                        [lang] : res
                    }
                })
            }
            else {
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
            repos: {...this.state.repos},
            err: null
        })
        if(this.state.repos[lang] === undefined)
            this.setRepo(lang);
    }

    componentDidMount() {
        this.setRepo(this.state.currLang);
    }

    setLoading = () => {
        return !this.state.repos[this.state.currLang] && this.state.err === null;
    }

    render() {
        const {currLang,repos,err} = this.state;
        return (
            <>
                <LanguageNav 
                    currLang = {this.state.currLang} 
                    updateLang = {this.updateLang}
                />
                {err && <p>{err}</p>}
                {   repos[currLang] && <Repository repos = {this.state.repos[currLang]} />}

                {this.setLoading() && <Loading  msg = "Fetching Language"/>}
                
            </>
        )
    }
}

export default Language;