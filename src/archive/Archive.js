import React, {useState} from 'react';
import useFirestore from '../store/hooks/useFirestore';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import './Archive.css'

const Archive = () => {
    const { docs } = useFirestore('files');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState('');

    // let sortedProducts = [...docs];
    docs && docs.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
    
    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        }

    const auth = useSelector((state) => state.firebase.auth)
    if (!auth.uid) { return <Redirect to='/signin' /> }

    console.log(docs)
    return (
        <>
            <div class="wrapper header container">
                <h2 className="typing-demo">
                    Archive
                </h2>
                {/* Search Bar */}
                <div class="searchbox">
                    <input type="text" class="searchbox__input" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}}/>
                    <svg class="searchbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </div>
            </div>

            {/* Table */}
            <div className="archive-container">
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th><button class="arch-btn" type="button" onClick={() => requestSort('authorFirstName')}>Author </button></th>
                        <th><button class="arch-btn" type="button" onClick={() => requestSort('name')}> File Name </button></th>
                        <th><button class="arch-btn" type="button" onClick={() => requestSort('createdAt')}>Date</button></th>
                    </tr>
                    </thead>
                    {/* eslint-disable-next-line */}
                    { docs && docs.filter((val) => { 
                        if (searchTerm === "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((doc, key) => {
                        return ( 
                            <tbody>
                            <tr key={doc.id} class="active-row">
                                <td className="file-name">{doc.authorFirstName} {doc.authorLastName} </td>
                                <td><a className="file-name" href={doc.url}> {doc.name} </a></td>
                                <td className="file-sub">{new Date(doc.createdAt.seconds * 1000).toLocaleDateString("en-US")}</td>
                            </tr>
                            </tbody>
                        )                        
                    })}
                </table>
            </div>
        </>
    )

}

export default Archive