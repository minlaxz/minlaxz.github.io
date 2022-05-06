import counterReducer from "./counter";
import feedbackReducer from "./feedback";
import darkmodeReducer from "./toggleDark";
import testCallReducer from "./testcall";

const Reducers = ({
    counter: counterReducer,
    feedback: feedbackReducer,
    darkmode: darkmodeReducer,
    testCall: testCallReducer,
});

export default Reducers;