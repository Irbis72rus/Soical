import { NavLink } from 'react-router-dom';
// import FriendIcon from '../SideBar/Friends/FriendIcon';
import s from './Navbar.module.css';

const Navbar = () => {

    // let friendsElements = props.state.friends.map(f => <Friend name={f.friend} />);

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/* <div className={`${s.item} ${s.active}`}>
                <NavLink to="/friends" activeClassName={s.activeLink}>
                    Friends
                    <FriendIcon />
                </NavLink>
            </div> */}
        </nav>
    )
}
export default Navbar;