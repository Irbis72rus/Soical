// import s from './Friends/Friends.module.css'

import FriendIcon from "./FriendIcon"

const Friend = (props) => {
    return (
        <div className='friendMain'>
            <span>
                <FriendIcon />
            </span>
            Friends
        </div>
    )
}

export default Friend;