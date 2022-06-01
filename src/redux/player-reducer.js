const PLAY_MUSIC = "player/PLAY_MUSIC";

let initialState = {
  url: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
};

export const playMusic = (url) => ({
  type: PLAY_MUSIC,
  url,
});

export default playerReducer;
