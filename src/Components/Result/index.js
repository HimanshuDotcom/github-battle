import { calculateScore } from "../../api";
import { useReducer, useEffect } from "react";
import cx from "classnames";
import styles from './styles.module.css';
import Loading from "../Loading/index";
import { FaBriefcase, FaCompass, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";

function resultReducer(state,action) {
    switch(action.type) {
        case 'sucess' :
            return {
                winner: action.payload.winner,
                loser: action.payload.loser,
                err: null,
                loading: false
            }
        case 'failure' :
            return {
                winner: null,
                loser: null,
                err: action.payload.message,
                loading: false
            }
        default : 
            throw new Error(`Action isn't supported`);
    }
}
function ResultCard({profile, status}) {
    const {profile:user,score} = profile; 
    const prac = (e) => {
        console.log(e);
    }
    console.log(profile)
    return(
        <>
            <div className={cx(styles.player)}>
                <h1>{status.toUpperCase()}</h1>
                <img className="" src={user.avatar_url} alt = "Player image" />
                <h3>Score : {score.toLocaleString()}</h3>
                <h2><a target="_blank" href={user.url}>{user.name}</a></h2>
                <ul className={cx(styles.player_desc)}>
                    <li onMouseOver={prac}><FaUser color= 'rgb(239,115,115)' size={25} />{user.login}</li>
                    <li>
                        <FaCompass color='rgb(144,115,255)'size={25} />
                        {user.location || "Not Availabe"}
                    </li>
                    <li>
                        <FaBriefcase color='#795548'size={25} />
                        {user.company || "Not Availble"}
                    </li>
                    <li>
                        <FaUsers color='rgb(129,195,245)' size={25}/>
                        {user.followers.toLocaleString()} followers
                    </li>
                    <li>
                        <FaUserFriends color='rgb(64,195,245)' size={25} />
                        {user.following.toLocaleString()} following
                    </li>

                </ul>
            </div>
        </>
    )
}
function Result({player1,player2, resetBattle}) {
    const [state,dispatch] = useReducer(
        resultReducer, 
        {winner: null, loser: null,err: null, loading: true})
 
    useEffect(async () => {
        try {
            const res = await calculateScore(player1,player2);
            dispatch({
                type: 'sucess',
                payload: {
                    winner: res[0],
                    loser: res[1]
                }
            })
        }
        catch(err) {
            dispatch({
                type: 'failure',
                payload: {
                    err: err
                }
            })
        }
    },[player1,player2])

    const {winner, loser, err, loading} = state;

    return (
        <>
            {err && <p>{err}</p>}
            {loading && <Loading msg = "Fetching Result" />}
            <div className={cx(styles.results)}>
                {winner && <ResultCard profile = {winner} status = "winner" />}
                {loser && <ResultCard profile={loser} status="loser" />}
            </div>
            <button onClick={resetBattle}  className={cx(styles.btn)}>Reset</button>
        </>
    )
}

export default Result;