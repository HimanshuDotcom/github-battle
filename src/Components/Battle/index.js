import cx from "classnames";
import styles from './styles.module.css';
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

function Battle() {
    return (
        <>
            <Instruction />
        </>
    )
}

export default Battle;