import React from 'react';
import axios from 'axios';
import { isURL } from 'validator';

import { NormalContainer } from '@/Components/Containers';
import { NavigationButtons } from '@/Components/Buttons';
import { ToHome } from '@/Routes/';
import { ShortInput } from './styles';
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
        setR('');
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
            <h3>it's me link shortener 👻 </h3>
            <ShortInput b_points="768" value={link} onChange={(e) => setLink(e.target.value)} />
            <button
                onClick={handleSubmit}
                className={`${styles.short_link_button} ${disabled && `${styles.disabled}`}`}
                disabled={disabled}> Shorten</button>
            {
                r &&
                <>
                    {/* 
                        onClick={(e) => { navigator.clipboard.writeText(e.target.innerText) }}
                    */}
                    <p
                        className={styles.short_link_result}
                        onClick={(e) => {
                            navigator.clipboard.writeText(`https://api.octocat.tk/r/${r}`)
                            e.target.innerHTML = `<b>Copied https://api.octocat.tk/r/${r}</b>`
                        }}
                    > {`https://api.octocat.tk/r/${r}`} <b style={{ color: "green" }}>click to copy</b></p>
                </>
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