import { styled } from "styled-components";

const Wrapper = styled.div`

#fild{
  position:relative !important;
  top:39px !important;
  display: flex;
  flex-direction:column;
}

.btn{
  background-color:#00ABB3;
  color:#FFF;
  display:flex;
  justify-content:center;
  align-items: center;
  height: 50px;
}

input{
  width:100%;
  padding:8px;
  height:30px;
  font-size:24px;
  margin-bottom:15px;
  border-radius:15px;
  border: transparent;
}

label{
  color:#FFF;
  letter-spacing: 2px;
  font-family:Inter Tight;
  margin-top:5px;
}

#av{
  background-color: rgba(1 103 152 / 50);
  width:50%;
  height:100%;
}

#av div{
 
  height:70%;
  width:80%;
  position:relative;
  left:10%;
  top:5%;
}
#av div h1{
  width:129px;
  margin-left:58px;
   border-bottom: 5px solid yellow;
}


#sd{
  // background-color:#3772FF;
  width:46%;
  padding:-50px;
  height:100%;
  margin-left:50px;
}

#sd h1{
  font-size:50px;
}

a{
  color:yellow;
  text-decoration:none;
}

`
const Box = styled.div`

h1{
  color:white;
  font-family:Inter Tight;
  letter-spacing: 5px;
}
p{
  color:white;
  font-family:Inter Tight;
}

`
const Main = styled.div`
 position:relative; 
 top:15vh;
 left:15vw;
 height:65vh;
 width:70vw;
 display:flex;


 #d-flex{
   display:flex;
   justify-content:space-around;
 }
 #box{
  border: 4px solid white;
  border-radius:45px;
  position:relative; 
  top: 50px;

 }
 #box h1{
    position:relative; 
    left: 140px;
    font-size:35px;
 }
 #box ul{
    color:#FFF;
 }


 `

const Register = () => {
  return (
    <Wrapper >
      <Main>
         <Box id="av">
            <Box>
              <h1>Register</h1>
               <Box id="fild" >
                <label>Email :</label>
                <input type="text" />
                <label>Name:</label>
                <input type="text" />
                <label>Mobile No :</label>
                <input type="text" />
                <label>Password:</label>
                <input type="text" />
                <p>or you allredy have account log in <a href="/">here</a></p>

                <input type="button" value="Register" className="btn" />
               </Box >
            </Box>
         </Box>
         <Box id="sd">
        <h1>BEST WAY </h1>
        <h1>FOR YOUR DAY</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem amet laborum natus voluptate iure a praesentium inventore omnis, eius molestiae vero ipsa blanditiis tempora tempore maiores. Debitis cumque voluptatum alias eius excepturi, dolor nobis. Incidunt impedit quod veritatis aperiam? Voluptatem!</p>
        
        <div id="box">
          <h1>Company Service</h1>
           <div id="d-flex">
              <ul>
                    <li>OUR SERVICES</li>
                    <li>OUR SERVICES</li>
                    <li>OUR SERVICES</li>
                    <li>OUR SERVICES</li>
              </ul>
              <ul>
                    <li>OUR SERVICES</li>
                    <li>OUR SERVICES</li>
                    <li>OUR SERVICES</li>
                    <li>OUR SERVICES</li>
              </ul>
           </div>
        </div>
       
       </Box>
      </Main>
    </Wrapper>
  )
}

export default Register