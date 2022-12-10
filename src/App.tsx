import React, {useState} from 'react';
import './App.css';
import {useBreeds} from "./hooks/useBreeds";

function App() {
    const {data, loading, error} = useBreeds()
    const arr: string[] = []
    const [pics, setPics] = useState<boolean>(false)

    if(data!=null ) {
        for (const key of Object.keys(data)) {
            arr.push(`${key} `)
        }

    }

    async function getImages(breed: string) {
        setPics(prevState => !prevState)
        console.log(breed)
    }

    return (
        <div className="app">
            <div className="list">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {arr.map(((item, value) => {
                    return <ul>
                        <li onClick={() => getImages(item)} key={value}>
                           <p>{item}</p>
                            {pics && <div>123</div>}
                        </li>
                    </ul>
                }))}
            </div>
        </div>
    );
}

export default App;
