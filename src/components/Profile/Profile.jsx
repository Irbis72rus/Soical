import { addPost, updateNewPostText } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer 
                // Убрали стор, когда добавили StoreContext в index.js
                // store={props.store}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost} 
                />
        </div>
    )
}
export default Profile;