import cx from "classnames";
import styles from './styles.module.css';
import { useState } from "react";
import {FaTrophy,FaUserFriends,FaFighterJet} from 'react-icons/fa';

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

function Player({label}) {
    const [user,setUser] = useState('');

    return(
        <>
            <form className={cx(styles.player)} onSubmit={() => console.log('here')}>
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

function Battle() {
    return (
        <>
            <Instruction />
            <div className={cx(styles.players)}>
                <h1 className={cx(styles.h1)}>Players</h1>
                <div className={cx(styles.players_group)}>
                    <Player label="Player 1" />
                    <Player label="Player 2" />
                </div>
            </div>
            
        </>
    )
}

export default Battle;