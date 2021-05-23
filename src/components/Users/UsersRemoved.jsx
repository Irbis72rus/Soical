import axios from 'axios';
import React from 'react';
import styles from './users.module.css';
// import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    let getUSers = () => {


        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    // Старые пользователи
    // [
    //     {
    //         id: 1, photoUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    //         followed: false, fillName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }
    //     },
    //     {
    //         id: 2, photoUrl: 'https://photolemur.com/uploads/blog/unnamed.jpg',
    //         followed: true, fillName: 'Sasha', status: 'I am a boss too', location: { city: 'Miscow', country: 'Russia' }
    //     },
    //     {
    //         id: 3, photoUrl: 'https://media.istockphoto.com/photos/lion-in-high-grass-picture-id494856046?k=6&m=494856046&s=612x612&w=0&h=Eb3uv75Vld5c_n22v8i5XktUPl60czynY4EVx7XMuV4=',
    //         followed: false, fillName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' }
    //     }
    // ]


    return <div>
        <button onClick={getUSers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;