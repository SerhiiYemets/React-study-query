import { useQuery } from "@tanstack/react-query"

import {getCharacter} from "./services/character"
import { useState } from "react";

function App() {

    const [counter, setCounter] = useState(1);

    const {data, error, isLoading} = useQuery({
        queryKey: ["character", counter],
        queryFn: () => getCharacter(counter),
        staleTime: 60 * 1000, // 1 min
    });

    console.log({ data, error, isLoading });
    
    return (
        <>
            <h1>React Query</h1>
            <button onClick={() => setCounter(prevCounter => prevCounter - 1)}> - </button>
            <span>{ counter }</span>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}> + </button>
            {isLoading && <p>Loading</p>}
            {error && <p>Something went wrong</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </> 
    );
}

export default App;