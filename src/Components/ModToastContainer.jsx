import React from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import { useMediaQuery } from '@/Hooks/useMediaQuery';

const ModToastContainer = () => {
    let isScreenWide = useMediaQuery('(min-width: 800px)')
    return (
        <ToastContainer
            position={isScreenWide ? `bottom-right` : `bottom-center`}
            limit={3}
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            transition={Flip}
            toastStyle={{
                margin: '10px 10px',
            }}
        />
    );
};

export default ModToastContainer;