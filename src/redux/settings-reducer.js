const SWITCH_THEME = "settings/SWITCH_THEME";
const GET_THEME = "settings/GET_THEME";

/*type SwitchThemeActionType = {
   type: typeof SWITCH_THEME,
   isDark: boolean
}*/

let initialState = {
  isDark: true,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME: {
      return {
        ...state,
        isDark: !state.isDark,
      };
    }
    case GET_THEME: {
      return { ...state.isDark };
    }

    default:
      return state;
  }
};

export const switchThemeActionCreator = () => ({
  type: SWITCH_THEME,
});
export const getTheme = () => ({
  type: GET_THEME,
});

export default settingsReducer;
