const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [{ message: "Tomorrow can take care of itself", id: 1 }],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      {
        let newPost = {
          id: 2,
          message: state.newPostText,
        };
        if (newPost.message !== "") {
          let stateCopy = { ...state };
          stateCopy.posts = [...state.posts];
          stateCopy.posts.push(newPost);
          stateCopy.newPostText = "";
          return stateCopy;
        }
      }
      return state;
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
