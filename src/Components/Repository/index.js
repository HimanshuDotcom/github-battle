import cx from "classnames";
import styles from './styles.module.css';
import {FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';

function Repo({index,repo}) {
    console.log(repo);
    return (
        <>
            <div className={cx(styles.repo)}>
                <h1 className={cx(styles.center)}>#{index+1}</h1>
                <div className={cx(styles.center,styles.img)}>
                    <img  src = {`${repo.owner.avatar_url}`} alt="Repo image" />
                </div>
                <h2 className={cx(styles.center)}>
                    <a href={repo.html_url} >{repo.name} </a>
                </h2>
                <ul className={cx(styles.repo__desc)}>
                    <li> 
                        <FaUser color='rgb(255,191,116)' style={{'margin-right' : '10px'}} /> 
                        {repo.name}
                    </li>
                    <li> 
                        <FaStar color='rgb(255,215,0)' style={{'margin-right' : '10px'}} /> 
                        {repo.stargazers_count.toLocaleString()} stars
                    </li>
                    <li> 
                        <FaCodeBranch color='rgb(129,195,245)' style={{'margin-right' : '10px'}} /> 
                        {repo.forks.toLocaleString()} forks
                    </li>
                    <li> 
                        <FaExclamationTriangle color='rgb()' style={{'margin-right' : '10px'}} /> 
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
                {repos.map((repo,index) => <Repo index = {index} repo = {repo} /> )}
            </div>
        </>
    )
}

export default Repository;