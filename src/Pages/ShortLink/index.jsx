import React from 'react';
import { NormalContainer } from '@/Components/Containers';
import { ShortInput } from './styles';
import { NavigationButtons } from '@/Components/Buttons';
import { ToHome } from '@/Routes/';
import { isURL } from 'validator';
import axios from 'axios';
import styles from './Button.module.css';

const LinkShortener = () => {
    const [link, setLink] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const [r, setR] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (isURL(link, { protocols: ['http', 'https'], require_protocol: true })) {
            setLink(link);
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [link]);

    const handleSubmit = async () => {
        setLoading(true);
        setLink('');
        const endpoint = process.env.NODE_ENV === "development" ? "http://localhost:8787/r" : "https://api.octocat.tk/r"
        console.log(endpoint)
        try {
            const resp = await axios.post(`${endpoint}`, {
                Headers: { 'Content-Type': 'application/json' },
                url: link
            });
            setR(resp.data.slug);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <NormalContainer>
            <h4>it's me link shotener 👻 currently building...</h4>
            <ShortInput b_points="768" value={link} onChange={(e) => setLink(e.target.value)} />
            <button
                onClick={handleSubmit}
                className={`${styles.short_link_button} ${disabled && `${styles.disabled}`}`}
                disabled={disabled}> Shorten</button>
            {
                r &&
                <span>
                    {`https://api.octocat.tk/r/${r}`}
                </span>
            }
            {
                loading &&
                <span>
                    <i className="fas fa-spinner fa-spin"></i>
                </span>
            }

            <NavigationButtons>
                <ToHome cusName="Well, Go back 🏡" />
            </NavigationButtons>
        </NormalContainer>
    )
}

export default LinkShortener;