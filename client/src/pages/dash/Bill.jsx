import { styled } from "styled-components";

const Box = styled.div`
  h1{
    color:white;
    font-family:Inter Tight;
    border-bottom:2px solid #FFF;
    margin-top: 37px;
  }
  
`

const Bill = () => {
  return (
    <>
        <Box>
            <h1>Bill</h1>
        </Box>
    </>
  )
}

export default Bill
