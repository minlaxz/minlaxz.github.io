import React from 'react';
import { NormalContainer } from "@/Components/Containers"
import { SourceProP, DivUl, UlView, LiView } from '@/Components/Views';
import { ToHome, ToGitCS, ToReactCS, ToCheatsheets } from '@/Routes/';
import { NavigationButtons } from '@/Components/Buttons';

export default () => {
    return (
        <NormalContainer justifyContent="flex-start">
            <h3>Cheat Sheets</h3>
            <SourceProP fontSize="14px">
                ... that I have <b>collected</b>.
            </SourceProP>
            <DivUl>
                <UlView>
                    <LiView> <ToGitCS /> </LiView>
                    <LiView> <ToReactCS /> </LiView>
                    {/* extensiable */}
                </UlView>
            </DivUl>
            <NavigationButtons>
                <ToHome cusName="Go to Home" />
            </NavigationButtons>
        </NormalContainer>
    );
};

export const CShead = (props) => (
    <>
        <SourceProP fontSize="16px" fontWeight="bold">
            {props.text}
            &nbsp;
            {props.children}
        </SourceProP>
        <NavigationButtons>
            <ToHome cusName="Back to Home 🏡" />
            <ToCheatsheets cusName="Back to List 📔" />
        </NavigationButtons>
    </>
)
