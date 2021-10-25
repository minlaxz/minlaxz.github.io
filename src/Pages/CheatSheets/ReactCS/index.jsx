import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { CShead } from '@/Pages/CheatSheets/';
import { ReactIcon } from '../icons';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
`;

const Card = styled.div`
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 15px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
`;

const Code = (props) => (
    <pre>
        <code>
            {props.code}
        </code>
    </pre>
)

export default () => (
    <NormalContainer justifyContent="flex-start" height="100%">
        <CShead text="React Cheat Sheet">
            <ReactIcon />
        </CShead>
        <CardContainer>
            <Card>
                <h3>Create React App</h3>
                <Code code="npx create-react-app APP_NAME" />
            </Card>
            <Card>
                <h3>Stateless component</h3>
                <Code code="
import React from 'react';

const YourComponent = () => <div> aaa </div> ;

export default YourComponent;
"/>
            </Card>
            <Card>
                <h3>Class component</h3>
                <Code code="
import React from 'react';

class YourComponent extends React.Component {
    render() {
        return <div>aaa</div>
    };
};

export default YourComponent;
"/>
            </Card>

        </CardContainer>
    </NormalContainer>
)