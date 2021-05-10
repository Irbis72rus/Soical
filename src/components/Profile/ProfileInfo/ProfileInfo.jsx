import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
            </div>
            <div className={s.discriptionBlock}>
                <img src='https://html5css.ru/css/img_forest.jpg' />
            </div>
        </div>
    )
}
export default ProfileInfo;