const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 25 },
        { id: 2, message: 'It\'s my first post', likesCount: 30 },
        { id: 3, message: 'Blabal', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                // message: postMessage, - Было так, если передавали аргумент
                likesCount: 0
            };
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = '';
            return {
                ...state,
                posts: [ ...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {

            // stateCopy.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
// export const updateNewPostTextActionCreator = (text) => {
//     return { type: UPDATE_NEW_POST_TEXT, newText: text}
// }

export default profileReducer;