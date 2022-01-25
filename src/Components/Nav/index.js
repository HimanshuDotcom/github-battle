import {NavLink, Link} from 'react-router-dom';
import cx from 'classnames';
import styles from './styles.module.css';

function Nav() {
    const activeStyle = {
        'color' : 'red',
        'fontWeight' : 'bold'
    }
    return (
        <div className={cx(styles.navbar)}> 
            <nav>
                <NavLink  
                    to = '/' 
                    style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                >
                    Languages
                </NavLink>
                <NavLink  
                    to = '/battle' 
                    style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                >
                    Battle
                </NavLink>
               
            </nav>
        </div>
    )
}
export default Nav;