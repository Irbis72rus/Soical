import s from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className='sideBarMain'>
            <span className='sideBarMain__page'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU' />
            </span>
            Friends
        </div>
    )
}

export default Sidebar;