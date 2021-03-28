import React from 'react'
import { useStorage } from '../hooks'

const ProgressBar = ({file, setFile}) => {
    const { progress, url } = useStorage(file);

    React.useEffect(() => {
        if (url) { setFile(null); }
    }, [url, setFile]);
    
    return <div className="progress" style={{ width: progress + "%" }}></div>
}

export default ProgressBar;