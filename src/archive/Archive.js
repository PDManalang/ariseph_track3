import React from 'react';
import useFirestore from '../store/hooks/useFirestore';

import './Archive.css'

const Archive = () => {
    const { docs } = useFirestore('files');
    console.log(docs)
    return (
        <>
            <div class="header wrapper">
                <h2 class="typing-demo">Archive</h2>
            </div>

            <section id="top-section">
                <div class="input-box">
                <input placeholder="Search..." />
                <div>
                    <i class="fas fa-search"></i>
                </div>
                </div>
            </section>

            <div className="post-container">
                <div className="file-grid">
                    { docs && docs.map(doc =>(
                        <div className="file-wrap file-container" key={doc.id}>
                            <a className="file-name" href={doc.url}> {doc.name} </a>
                            <p className="file-sub">{new Date(doc.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Archive