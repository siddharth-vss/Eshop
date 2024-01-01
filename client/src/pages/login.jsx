import { styled } from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Box = styled.div`
background-color:white;
 width:504px;
 height:714px;
 border-radius:25px;
 

 h1{
  color:#5eb1bf;
  font-family:agbalumo;
 }
`

const Login = () => {
  return (
    <Wrapper >
      <Box className="">
           <h1>
            LOGIN
           </h1>
      </Box>
    </Wrapper>
  )
}

export default Login