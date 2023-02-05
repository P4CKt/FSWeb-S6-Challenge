import React from "react";
import styled from "styled-components";

function Searcher(props){


    const{search,setSearch}= props;

const ScSbar= styled.input`
width:400px;
margin-bottom:10px;
border: 3px solid #00A4Bf;

`

    return(
<ScSbar type="text" onChange={(event)=>{setSearch(event.target.value)}}
>

</ScSbar>
    )
}

export default Searcher;