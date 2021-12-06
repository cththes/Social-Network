const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [{ message: "Tomorrow can take care of itself", id: 1 }],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    case ADD_POST:
      let text = state.newPostText;
      if (text !== "") {
        return {
          ...state,
          newPostText: "",
          posts: [...state.posts, { id: 2, message: text }],
        };
      } else return state;

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export default profileReducer;
