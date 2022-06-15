const SWITCH_THEME = "settings/SWITCH_THEME";

type SwitchThemeActionType = {
  type: typeof SWITCH_THEME,
}


let initialState = {
  isDark: true,
};

export type InitialStateType = typeof initialState

const settingsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SWITCH_THEME: {
      return {
        ...state,
        isDark: !state.isDark,
      };
    }

    default:
      return state;
  }
};

export const switchThemeActionCreator = (): SwitchThemeActionType => ({
  type: SWITCH_THEME,
});

export default settingsReducer;
