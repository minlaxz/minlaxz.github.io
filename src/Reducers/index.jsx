import counterReducer from './counterSlice';
import commitReducer from './lastCommitSlice';
import darkThemeReducer from './themeSlice';
import toastReducer from './toastSlice';

export default ({
    lastCommit: commitReducer,
    counter: counterReducer,
    darkTheme: darkThemeReducer,
    toast : toastReducer,
});