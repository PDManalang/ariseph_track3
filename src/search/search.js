import React, {useState, useEffect} from 'react';
import useFirestore from '../store/hooks/useFirestore';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import './search.css'

function Search({project}) {

    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);
    useEffect(() => {
        if(value.length > 0){
            fetch('https://my-app-983f1-default-rtdb.asia-southeast1.firebasedatabase.app/').then(
                response => response.json()
            ).then(responseData => {
                setResult([]);
                let searchQuery = value.toLowerCase();
                for(const key in responseData) {
                    let search = responseData[key].name.toLowerCase();
                    if(search.slice(0, searchQuery.length) !== -1) {
                        setResult(prevResult => {
                            return [...prevResult, responseData[key].name]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            setResult([]);
        }
    }, [value])

    return (
        <>
            <div class="searchbox">
                <input type="text" class="searchbox__input" placeholder="Search..." onChange={(event) => setValue(event.target.value)} value={value}/>
                <svg class="searchbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                <div className="searchBack">
                    {result.map((result, index) => (
                        <a href="#" key={index}>
                            <div className="searchEntry">
                                {result}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Search;