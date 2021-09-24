import * as actions from "@/actions/themeActions";


const initialState = { darkThemeEnabled: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_DARKTHEME:
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

        default: return state;
    }
}