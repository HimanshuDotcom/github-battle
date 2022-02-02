import cx from "classnames";
import styles from './styles.module.css';
import { useEffect, useState } from "react";
import {FaTrophy,FaUserFriends,FaFighterJet} from 'react-icons/fa';
import { fetchProfile } from "../../api";
import Result from "../Result/index";

function Instruction() {
    return (
        <>
        <h1 className={cx(styles.h1)}>Instructions</h1>
        <ul className={cx(styles.instr)}>
            <li>
                <span>Enter two github users</span>
                <FaUserFriends color="rgba(255,191,116)" size={150}/>
            </li>
            <li>
                <span>Battle</span>
                <FaFighterJet color="#727272" size={150}/>
            </li>
            <li>
                <span>See the winner</span>
                <FaTrophy color="rgba(255,215,0)" size={150}/>
            </li>
        </ul>
    </>
    )
}

function Player({label, onSubmit}) {
    const [user,setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e.target[0].value);
    }
    return(
        <>
            <form className={cx(styles.player)} onSubmit={handleSubmit}>
                <label className={cx(styles.player_label)}>
                    {label}
                </label>
                <div className={cx(styles.player_input)}>
                    <input 
                        type="text" 
                        value = {user} 
                        onChange={(e)=> setUser(e.target.value)}
                        placeholder="github user"
                    />
                    <button 
                        className={cx(styles.btn,styles.dark_btn)} 
                        type="submit"
                        disabled = {!user}
                    >
                            Submit
                        </button>
                </div>
            </form>
        </>
    )
}

const Profile = ({player,resetPlayer}) => {
    const [data,setData] = useState('')

    useEffect(() => {
        fetchProfile(player).then(res => setData(res));
    },[player])

    const handleReset = () => {
        setData('');
        resetPlayer();
    }
    return (
        <>
            <div className={cx(styles.profile)}>
                <div className={cx(styles.profile_desc)}>
                    <img src={`${data.avatar_url}`} alt="" />
                    <h2>{data.login}</h2>
                </div>
                <button onClick={handleReset}>&times;</button>
            </div>
        </>
    )
}

function Battle() {
    const [player1,setPlayer1] = useState('');
    const [player2,setPlayer2] = useState('');
    const [battle,setBattle] = useState(false);


    if(battle) {
        return (
            <Result player1 = {player1} player2 = {player2} resetBattle = {() => setBattle(false)}/>
            // <>REsult</>
        )
    }
    
    return (
        <>
            <Instruction />
            <div className={cx(styles.players)}>
                <h1 className={cx(styles.h1)}>Players</h1>
                <div className={cx(styles.players_group)}>
                   {
                       player1 ?
                       <Profile 
                            player={player1} 
                            resetPlayer = {() => setPlayer1('')}
                        /> :
                        <Player 
                            label="Player 1" 
                            onSubmit = {(name) => setPlayer1(name)}
                            resetPlayer = {() => setPlayer1('')}
                        />
                   } 
                   {
                       player2 ?
                       <Profile 
                            player={player2} 
                            resetPlayer = {() => setPlayer2('')}
                        /> :
                        <Player 
                            label="Player 2" 
                            onSubmit = {(name) => setPlayer2(name)}
                        />
                   } 
                
                </div>
                {   player1 && player2 && 
                    <button className = {cx(styles.btn_dark)} onClick={() => setBattle(true)}>
                        Battle
                    </button>
                }
            </div>
            
        </>
    )
}

export default Battle;