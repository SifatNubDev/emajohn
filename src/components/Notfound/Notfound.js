import React from 'react';

const Notfound = () => {
    const style = {
        margin : '0 auto',
        paddingTop: '30px'
    }
    return (
        <div style={style}>
            <h3>Sorry Requested page was not found......</h3>
            <h1 style={{color : 'red'}}>~~~Error 404~~~</h1>
        </div>
    );
};

export default Notfound;