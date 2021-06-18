import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
        };

        if(term && !results.length) {
            search();
        } else {
            const timeputID = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);
    
            return () => {
                clearTimeout(timeputID);
            };
        }

        // const timeputID = setTimeout(() => {
        //     if (term) {
        //         search();
        //     }
        // }, 500);

        // return () => {
        //     clearTimeout(timeputID);
        // };
    },[term]);

    const renderResults = results.map((results) => {
        return (
            <div className="item" key={results.pageid}>
                <div className="right floated content">
                    <a className="ui button" target="_blank" href={`https://en.wikipedia.org?curid=${results.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
                    {/* {results.snippet} */}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <div className="ui celled list">{renderResults}</div>
            </div>
        </div>
    );
}

export default Search;