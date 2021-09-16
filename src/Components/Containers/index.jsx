import styled from 'styled-components';

export const ShadowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 297mm;
    width: 210mm;
    background-color: #fafafa;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    }
`;

export const NormalContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 95vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: var(--background-color);
    color: var(--color);
    transition: cubic-bezier(0.215, 0.610, 0.355, 1) 0.6s;
`;