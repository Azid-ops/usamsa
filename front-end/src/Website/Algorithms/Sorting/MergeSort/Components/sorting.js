import React, { useEffect, useState } from "react";
import Aux from "../../../../Auxiliary/Auxiliary";
import MergeSortPage from "../Pages/sorting";
import Nav from "../../../../Interface/Navigation/Nav";

const MergeSort = () =>{

    const [data,setData] = useState([]);

    const [etc,setEtc] = useState("");

    let name,value;
    
    const handleInput = (event) => {
        event.preventDefault();
        name = event.target.name;
        value = event.target.value;
        setEtc(value);
    }

    useEffect(()=>{
        data.push(etc);
    })
    const display = (e) => {
        e.preventDefault();
        
    }
    return(
        <Aux>
            <MergeSortPage data={data} etc ={etc} display={display} handleInput={handleInput}/>
        </Aux>
    )
}

export default MergeSort;