import theme from "styled-theming";
import styled from "styled-components";

export const backgroundColor = theme("theme", {
    light: "#efefef",
    dark: "#292929",
});

export const textColor = theme("theme", {
    light: "#050505",
    dark: "#e2e2e2",
});

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${backgroundColor};
    color: ${textColor};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
`;