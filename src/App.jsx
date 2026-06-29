import {useState} from "react";


function App(){

    const [count,setCount] = useState(0);

    return(
        <div className="container">

            <h1>{count}</h1>

            <div className="buttons">

                <button className="btn" onClick={() => setCount(count + 1)}>
                    Increase
                </button>

                <button className="btn" onClick={() => {
                    if(count > 0){
                        setCount(count - 1)
                    }
                }}>
                    Decrease
                </button>

                <button className="btn" onClick={() => setCount(count * 2)}>
                    Double
                </button>

                <button className="btn" onClick={() => setCount(0)}>
                    Reset
                </button>

            </div>

        </div>
    )
}

export default App;