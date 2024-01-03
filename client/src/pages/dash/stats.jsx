import { styled } from "styled-components";

const Box = styled.div`

h1{
  color:white;
  font-family:Inter Tight;
  border-bottom:2px solid #FFF;
  margin-top: 37px;
}

`
const Boss = styled.div`
overflow-y: scroll;
height:85vh;

.card{
  width:185px;
  height:100px;
  background-color:#FFF;
  display:flex;
flex-direction: column;
} 

h1{
color:black;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
position:relative;
top:-12px;
}
h4{
  position:relative;
  top:-55px;
  display:flex;
justify-content:center;
font-family:Inter Tight;

}
.chart{
  width:60vw;
  height:60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left:38px;
  top:15px;
  border-radius: 25px;
  background-color:red;
}


`


const Stats = () => {
 
    
  return (
    <>
    <Box>
         <h1>Dashboard</h1>
         <Boss className="boss">

          <div style={{display: "flex",justifyContent:"space-around"}} >
            <div className="card" ><h1>65</h1><h4>New Tickets</h4></div>
            <div className="card" ><h1>65</h1><h4>New Tickets</h4></div>
            <div className="card" ><h1>65</h1><h4>New Tickets</h4></div>
            <div className="card" ><h1>65</h1><h4>New Tickets</h4></div>
            <div className="card" ><h1>65</h1><h4>New Tickets</h4></div>
            <div className="card" ><h1>65</h1><h4>New Tickets</h4></div>

          </div>
     

          <div>
            <div className="chart">
chart
            </div>
          </div>
          

        </Boss>
    </Box>
    </>
  )
}

export default Stats
