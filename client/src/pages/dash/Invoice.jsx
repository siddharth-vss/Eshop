import { styled } from "styled-components";

const Box = styled.div`
  h1{
    color:white;
    font-family:Inter Tight;
    border-bottom:2px solid #FFF;
    margin-top: 37px;
  }
  
`

const Invoice = () => {
  return (
    <>
        <Box>
            <h1>Invoice</h1>
        </Box>
    </>
  )
}

export default Invoice
