import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU' />
                {props.message}
            <div>
                <span>likes - {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;