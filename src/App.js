import React from "react";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
const App = () => {
const [note, setNote] = useState("");
const [data, setData] = useState([]);
const toSetNote =()=>{
  setData(
    [
      ...data,
      {
        note
      }
    ]
    );
    setNote("");
}
const toReamove=(index)=>{
  let arr = data;
  arr.splice(index,1)
  setData([...arr])
}
  return (
    <>
      <div className="main">
        <div className="notes">
          <div className="header">
            <Header />
          </div>
          <div className="add-area">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="ADD NOTES"
                variant="standard"
                value={note}
                onChange={(event)=> setNote(event.target.value)}
              />
            </Box>
            {/* here its a button */}
            <Box
              sx={{
                "& > :not(style)": {
                  m: 2,
                },
              }}
            >
              <button><AddIcon sx={{ fontSize: 30 }} onClick={toSetNote}/></button>
            </Box>
          </div>
          {
            data.map((eachObj,index)=>{
              return(
                <div className="show">
                <p>{eachObj.note }</p>
                <button><DeleteForeverIcon color="error" onClick={()=>toReamove(index)}/></button>
            </div>
              )
            })
          }
          
         
        </div>
      </div>
    </>
  );
};

export default App;
