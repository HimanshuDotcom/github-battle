import styles from "./styles.module.css";
import cx from 'classnames';
import React from "react";

function LanguageNav({currLang, updateLang}) {

    const langs = ['All','Javascript', 'Java','Python','Ruby'];

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
    
    state = {
        currLang : 'all'
    }
    
    updateLang = (lang) => {
        this.setState({
            currLang: lang
        })
    }

    render() {
        return (
            <>
                <LanguageNav 
                    currLang = {this.state.currLang} 
                    updateLang = {this.updateLang}
                />
            </>
        )
    }
}

export default Language;