import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "@/Reducers/themeSlice";
import { toggleToast } from "@/Reducers/toastSlice";

import { backgroundColor, textColor } from "./ToggleableStuff";
import { bgNav, textNav } from "./ToggleableStuff";

import { toast } from "react-toastify";

const MainContainer = styled.div`
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;
    background-color: ${bgNav};
`;

const ToggleContainer = styled.div`
/* I dont need bg color or color cuz mainconatiner set it */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 80%;
    padding: 0 10px;
    user-select: none;
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s;

    @media only screen and (max-width: 768px) {
        max-width: 90%;
    }
`;

const ToggleText = styled.span`
    font-size: 0.8em;
    font-weight: bold;
    color: ${textNav};
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.4s;

    @media only screen and (max-width: 768px) {
        font-size: 0.6em;
    }
`;

const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: 10%;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    /* box-shadow: 0px 0px 10px rgba(0,0,0,0.2); */
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    &:active {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
    }
`;


const Togglers = () => {
    const darkThemeEnabled = useSelector((state) => state.darkTheme.darkThemeEnabled);
    const toastEnabled = useSelector((state) => state.toast.toastEnabled);
    const dispatch = useDispatch();

    const ToastToggler = () => (
        <div style={{
            display: "flex", alignItems: "center",
        }}>
            <ToggleButton
                onClick={() => {
                    dispatch(toggleToast())
                    toastEnabled && toast.warn("Toast has been disabled");
                }
                }
            >
                {toastEnabled
                    ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ height: "2em", width: "2em" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    )
                    : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ height: "2em", width: "2em" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                    )}

            </ToggleButton>
            <ToggleText>{toastEnabled ? `Show Toast` : `No Toast`}</ToggleText>
        </div>
    )

    const ThemeToggler = () => (
        <div style={{
            display: "flex", alignItems: "center",
        }}>
            <ToggleText>Not Context but Redux =&gt;</ToggleText>
            <ToggleButton
                onClick={
                    () => {
                        dispatch(toggleTheme())
                        toastEnabled && toast(darkThemeEnabled ? `Switched to light mode 🤖.` : `Switched to dark mode 👻.`, {
                            icon: "🔄",
                            theme: darkThemeEnabled ? "dark" : "light"
                        })
                    }
                }
            >
                {darkThemeEnabled ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ height: "2em", width: "2em" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ height: "2em", width: "2em" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
            </ToggleButton>
        </div>
    )

    return (
        <MainContainer>
            <ToggleContainer>
                <ToastToggler />
                <ThemeToggler />
            </ToggleContainer>
        </MainContainer>
    );
};

export default Togglers;