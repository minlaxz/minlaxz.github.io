import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { ShortInput, ShortButton } from './styles';
import { NavigationButtons } from '@/Components/Buttons';
import { ToHome } from '@/Routes/';
import { isURL } from 'validator';

const LinkShortener = () => {
    const [link, setLink] = React.useState('');
    const [clickable, setClickable] = React.useState(false);

    React.useEffect(() => {
        if (isURL(link, { protocols: ['http', 'https'], require_protocol: true })) {
            setLink(link);
            setClickable(true);
        } else {
            setLink('');
            setClickable(false);
        }
    }, [link]);
    return (
        <NormalContainer>
            <h4>it's me link shotener 👻 currently building...</h4>
            <ShortInput b_points="768" onChange={(e) => setLink(e.target.value)} />
            <ShortButton disabled={!clickable}> Shorten </ShortButton>
            <NavigationButtons>
                <ToHome cusName="Well, Go back 🏡" />
            </NavigationButtons>
        </NormalContainer>
    )
}

export default LinkShortener;