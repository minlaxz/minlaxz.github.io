import theme from "styled-theming";
import styled from "styled-components";

export const backgroundColor = theme("theme", {
    light: "#efefef",
    dark: "#1e1e1e",
});

export const textColor = theme("theme", {
    light: "#1d3c47",
    dark: "#CEA981",
});

export const bgNav = theme("theme", {
    light: "#f5f5f5",
    dark: "#272727",
});

export const textNav = theme("theme", {
    light: "#1d3c47",
    dark: "#d4ccac",
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