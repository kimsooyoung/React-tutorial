import React from 'react';

class App extends React.Component{

    render(){
        return (
            <h1>
                <button onClick={()=>{console.log('this is for test')}}>name</button>
                Hello React!!!
            </h1>
        )
    }
}

export default App;