import React from 'react'
import styled from 'styled-components'
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <StyledLoader>
      <div className="loader">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </StyledLoader>
  );
}

let StyledLoader=styled.section`

.loader 
{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: black;
    opacity: 0.8;
}

`

export default Loading