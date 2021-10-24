import React from 'react';
import { NormalContainer } from "@/Components/Containers"
import { SourceProP, DivUl, UlView, LiView } from '@/Components/Views';
import { ToGitCS } from '@/Routes/';
import { ToHome } from '@/Routes/';
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
                    {/* extensiable */}
                </UlView>
            </DivUl>
            <NavigationButtons>
                <ToHome cusName="Go to Home" />
            </NavigationButtons>
        </NormalContainer>
    );
};
