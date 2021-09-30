import counterReducer from './counterSlice';
import commitReducer from './lastCommitSlice';
import darkThemeReducer from './themeSlice';

export default ({
    lastCommit: commitReducer,
    counter: counterReducer,
    darkTheme: darkThemeReducer
});