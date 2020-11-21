import React,{useState,useEffect} from 'react';
import DisplayCity from './DisplayCity';

const url = "https://developerfunnel.herokuapp.com/location";

function HookComponent(){
    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0);
    const [city,setMyCity] = useEffect()

    useEffect(()=>{
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMyCity(data)
        })
    })

    return(
        <div>
            <center>
                <h1>{title}</h1>
                <h2>{count}</h2>
                <button onClick={() => {setCount(count+1)}}>
                    Counter
                </button>
                <h2>{count1}</h2>
                <button onClick={() => {setCount1(count1+1)}}>
                    Counter
                </button>
                <DisplayCity myCity={city}/>
            </center>
        </div>
    )
}

export default HookComponent;