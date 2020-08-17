import React from 'react';

const Page =({history}) => {
    return(
        <div style={{margin: '10px'}}>
            <h2>404...</h2>
            <p>return to<span style={{color: 'dodgerblue',cursor: 'pointer'}}
            onClick={() => history.push('/')}
            > homepage</span></p>
        </div>
    )
}

export default Page;