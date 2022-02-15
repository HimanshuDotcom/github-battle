import cx from "classnames";
import styles from './styles.module.css';
import {FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';
import Tooltip from "../Tooltip/index";

function Repo({index,repo}) {
    return (
        <>
            <div className={cx(styles.repo)}>
                <h1 className={cx(styles.center,styles.h1)}>#{index+1}</h1>
                <div className={cx(styles.center,styles.img)}>
                    <img  src = {`${repo.owner.avatar_url}`} alt="Repo image" />
                </div>
                <h2 className={cx(styles.center,styles.h2)}>
                    <a href={repo.html_url} >{repo.name} </a>
                </h2>
                <ul className={cx(styles.repo__desc)}>
                    <Tooltip msg = "github-user">
                    <li> 
                        <FaUser color='rgb(255,191,116)' style={{'marginRight' : '10px'}} /> 
                        {repo.name}
                    </li>
                    </Tooltip>
                    <Tooltip msg = "stars">
                        <li> 
                            <FaStar color='rgb(255,215,0)' style={{'marginRight' : '10px'}} /> 
                            {repo.stargazers_count.toLocaleString()} stars
                        </li>
                    </Tooltip>
                    <li> 
                        <FaCodeBranch color='rgb(129,195,245)' style={{'marginRight' : '10px'}} /> 
                        {repo.forks.toLocaleString()} forks
                    </li>
                    <li> 
                        <FaExclamationTriangle color='rgb()' style={{'marginRight' : '10px'}} /> 
                        {repo.open_issues.toLocaleString()} open issue
                    </li>
                </ul>
            </div>
        </>
    )
}

function Repository({repos}) {
    return (
        <>
            <div className={cx(styles.wrapper)}>
                {repos.map((repo,index) => <Repo key = {repo.id} index = {index} repo = {repo} /> )}
            </div>
        </>
    )
}

export default Repository;