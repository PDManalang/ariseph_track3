import React from 'react';
import useFirestore from '../store/hooks/useFirestore';

const Archive = () => {
    const { docs } = useFirestore('files');
    console.log(docs)
    return (
        <div className="file-grid">
            { docs && docs.map(doc =>(
                <div className="file-wrap" key={doc.id}>
                    <a href={doc.url}> {doc.name} </a>
                </div>
            ))}
        </div>

    )

}

export default Archive