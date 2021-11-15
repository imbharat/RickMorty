import React from 'react';
import styles from './Pagination.Styles.js';
const InitPagesToShow = 7;

function Pagination({pages, fetchCharacters, activePage}) {
    const totalPages = Array.from({length: pages}, (_, i) => i+1);
    let initPages = pages > 9 ? InitPagesToShow : pages;
    let midPageNums = [];
    if(activePage > initPages){
        initPages = 1;
        midPageNums = totalPages.slice(activePage - 3, activePage + 2);
    }
    let initPageNums = Array.from({length: initPages}, (_, i) => i + 1);
    let endPageNums = totalPages.slice(pages - 1); 
    if(activePage >= pages - 3){
        midPageNums = [];
        endPageNums = totalPages.slice(pages - 7);
    }
    const activePageStyle = {
        ...styles.pageNumbers,
        ...styles.activePage
    };
    return (
        <div style={{
            margin: "1rem"
        }}>
            <span style={activePage === totalPages[0] ? {
                    ...styles.pageNumbers,
                    color: "#888"
                }: styles.pageNumbers }
                onClick={() => activePage !== totalPages[0] && fetchCharacters(activePage - 1)}>Prev</span>
            {
                initPageNums.map((num) => {
                    const css = activePage === num ? activePageStyle : styles.pageNumbers
                    return <span onClick={() => fetchCharacters(num)} 
                                key={num} 
                                style={css}>{num}
                            </span>
                })
            }
            {
                initPages === 1 && <span style={{
                    ...styles.pageNumbers,
                    cursor: "text"
                }}>...</span>
            }
            {
                midPageNums.map((num) => {
                    const css = activePage === num ? activePageStyle : styles.pageNumbers
                    return <span onClick={() => fetchCharacters(num)} 
                                key={num} 
                                style={css}>{num}
                            </span>
                })
            }
            {
                endPageNums.length === 1 && <span style={{
                    ...styles.pageNumbers,
                    cursor: "text"
                }}>...</span>
            }
            {
                endPageNums.map((num) => {
                    const css = activePage === num ? activePageStyle : styles.pageNumbers
                    return <span onClick={() => fetchCharacters(num)} 
                                key={num} 
                                style={css}>{num}
                            </span>
                })
            }
            <span style={activePage === pages ? {
                    ...styles.pageNumbers,
                    color: "#888"
                }: styles.pageNumbers}
                onClick={() => activePage !== pages && fetchCharacters(activePage + 1)}>Next</span>
        </div>
    )
}

export default Pagination
