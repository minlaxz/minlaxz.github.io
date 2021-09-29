import axios from 'axios';
import React from 'react';

const TikTik = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date());

    // javascript closures
    const aSingleTick = React.useCallback(() => {
        setCurrentTime(new Date());
    })

    React.useEffect(() => {
        // on component mount
        let timerId = setInterval(() => aSingleTick(), 1000);
        // component unmount
        return () => clearInterval(timerId);

    }, [aSingleTick]);

    return (
        <span>
            {currentTime.toLocaleTimeString()}
        </span>
    );
}

export default TikTik;