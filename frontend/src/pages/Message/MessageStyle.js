import styled from "styled-components";

export const Container = styled.div`
 height: 97%;
 width: 100%;
 max-width: 935px;
 margin:0 auto;
 display:flex;
 border: 1px solid #cbc5c5;
 overflow:hidden;
`
export  const First = styled.div`
  width:30%;
  border-right: 1px solid #cbc5c5;
`
export const Second = styled.div`
  width:70%;
  // background:red;
  display:flex;
  text-align:center;
  align-items:center;
  justify-content:center;
`
export const FirstinnerOne = styled.div`
 display:flex;
 border-bottom: 1px solid #cbc5c5;
 justify-content:space-around;
//  background:yellow;
  padding:10px;

`
export const ImageSpan = styled.span`
  // width:56px;
  // height:56px;
`
export const Image = styled.img`
  width:100%;
  height:100%;
  border-radius:50%;
`

export const FirstinnerTwo = styled.div`
     max-height:100%;
     overflow-y:scroll;
        
`
export const SecondTwo = styled.div`
   display:flex;
   justify-content:space-between;
   padding:10px;
`
export const SecondOne = styled.div`
  display:flex;
  flex:0 0 auto;
  // background:white;
  padding:8px;
`
export const ImageDiv = styled.div`
   width:56px;
   height:56px;   

`
export const Psecond = styled.p`
    font-size: 22px;
    line-height: 26px;
    margin: -4px 0 -5px;
    font-weight: 300;
    color: black;
    margin:6px;
`
export const SecondButton = styled.button`
  background-color: rgba(var(--d69,0,149,246),1);
  border: 1px solid transparent;
  border-radius:4px;
  color:#fff;
  padding: 5px 9px;
  font-weight:600;
  font-size:14px;
  text-align:center;
  cursor:pointer;
  position:relative;
  margin:6px;
`
export const SOContentName = styled.div`
font-weight:400;
font-size:14px;
line-height:18px;
color:black;
`
export const SOContentDetail = styled.div`
  color:#8e8e8e;
  font-weight:400;
  font-size:14px;
  line-height:18px;
`
export const SoSpan = styled.span`
  
`
export const PsecondTwo  = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
  font-weight:400;
  color:#8e8e8e;
  margin:6px;
`
export const SOContent = styled.div`
  padding:10px;
`
