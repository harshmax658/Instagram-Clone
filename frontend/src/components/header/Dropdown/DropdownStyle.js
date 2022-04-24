import styled from "styled-components";

export const Container = styled.div`
        width: ${(props) => {return props.width}};
        top:132%;s
        min-height: ${(props) => {return props.minheight}};
        background: #fff;
        // background: red;
        position: absolute;
        right: ${(props) => {return props.right}};  
        margin:1%;
        border-radius:6px;
        border: 0 solid #000;
        box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
        &:after{
                position: absolute;
                top: -8px;
                right: 9.8%;
                width: 0; 
                height: 0; 
                border-left: 8px solid transparent;
                border-right: 8px solid transparent; 
                border-bottom: 8px solid #fff;
                // border:1px solid black;
                content: '';
                display: block;
                z-index: 2;
                transition: all 200ms linear;
              
        }
`

