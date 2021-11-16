import React from 'react'
import { Link } from 'react-router-dom'

//Component
import Archive from "./Archive.js"
import '../post/Summary.css'
import useFirestore from '../store/hooks/useFirestore';

function ArchiveList({projects}) {
    const { docs } = useFirestore('files');
    console.log(docs)
    return (
        <div class="">
            <div>
                { docs && docs.map(doc =>(
                    <div className="file-grid">
                        <div className="file-wrap file-container" key={doc.id}>
                            <a className="file-name" href={doc.url}> {doc.name} </a>
                            <p className="file-sub">{new Date(doc.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArchiveList
