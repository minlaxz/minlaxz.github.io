import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "app/features/toggleDark";

const Toggler = () => {
 const dispatch = useDispatch();
 const { isDarkModeEnabled } = useSelector((state) => state.darkmodeReducer);

 return (
  <button
   onClick={() => {
    dispatch(toggleDarkMode(null));
   }}
   style={{ verticalAlign: "middle", marginBottom: 20 }}
  >
   {isDarkModeEnabled ? (
    <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     className="w-6 h-6"
    >
     <path d="M20.798 11.012l-3.188 3.416L9.462 6.28l4.24-4.542a.75.75 0 011.272.71L12.982 9.75h7.268a.75.75 0 01.548 1.262zM3.202 12.988L6.39 9.572l8.148 8.148-4.24 4.542a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262zM3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18z" />
    </svg>
   ) : (
    <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     className="w-6 h-6"
    >
     <path
      fillRule="evenodd"
      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
      clipRule="evenodd"
     />
    </svg>
   )}
  </button>
 );
};

export default Toggler;
