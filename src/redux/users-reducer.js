const FOLLOW = 'ADD-FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        //     followed: false, fillName: 'Dmitry', status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'} },
        // { id: 2, photoUrl: 'https://photolemur.com/uploads/blog/unnamed.jpg',
        //     followed: true, fillName: 'Sasha', status: 'I am a boss too', location: {city:'Miscow', country: 'Russia'} },
        // { id: 3, photoUrl: 'https://media.istockphoto.com/photos/lion-in-high-grass-picture-id494856046?k=6&m=494856046&s=612x612&w=0&h=Eb3uv75Vld5c_n22v8i5XktUPl60czynY4EVx7XMuV4=',
        //     followed: false, fillName: 'Andrew', status: 'I am a boss too', location: {city:'Kiev', country: 'Ukraine'} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users], Можно так или строкой ниже, только так копируем весь массив, а не конкретный элемент
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            case SET_USERS: {
                return {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            }
        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;