import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { NavigationButtons } from '@/Components/Buttons';
import { ToHome } from '@/Routes/';

const OtherSite = () => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        console.log(`=> Initial Effect Hook - Count: ${count}\n`)
        const id = setTimeout(() => {
            console.log(`--> Before Hook Makes State Update - Count: ${count}`)
            setCount(count + 1)
            console.log(`--> After Hook Makes State Update - Count: ${count}`)
        }, 10000);
        return () => {
            console.log(`xxx Cleanup Hook - Count: ${count}\n`)
            clearTimeout(id);
        }
    }, [count]);
    return (
        console.log(`=> Rendering DOM - Count: ${count}\n`),
        <NormalContainer justifyContent="flex-start">
            <h4 style={{ fontFamily: "cursive" }}>Here I test React Life Cycles</h4>
            <small><code>~View Inspect~</code></small>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <NavigationButtons>
                <ToHome cusName="Go Back To Home" />
            </NavigationButtons>
        </NormalContainer>
    );
}

export default OtherSite;