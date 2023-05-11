import React, { useState } from 'react'
import styleShapes from './../styles/styleShapes.css'



export default function Triangular() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [result, setResult] = useState(null);
  const [printing, setPrinting] = useState(false)

  const onChangeheight = e => {
    setHeight(Number(e.target.value))
    setPrinting(false)
    setResult(null)
  }

  const onChangeWidth = e => {
    const widthNum = Number(e.target.value)
    setWidth(widthNum)
    setPrinting(false)
    setResult(null)

  }
  function perimeter() {
    setResult(height + (2 * width));
    setPrinting(false)
  }
  function printTriangle() {
    setResult(null)

    if(width%2==0 || width> (2*height))
    alert("לא ניתן להדפיס את המשולש");
    else    
    setPrinting(true)
  }

  const drawStars = () => {
    let starMap = {}, currentHeight = 2;
    starMap[1] = 1;
    starMap[width] = 1;
    let num = (height - 2) / ((width - 3) / 2);
    for (let i = 3; i <= width - 2; i += 2) {
      starMap[i] = Math.floor(num);
      currentHeight += Math.floor(num)
    }
    if (currentHeight < height) {
      starMap[3] += height - currentHeight
    }

    const divArray = []

    Object.keys(starMap).sort((a, b) => a - b).map(key => {
      for (let i = 0; i < starMap[key]; i++) {
        divArray.push(<div>{[...Array(Number(key))].map((e, ind) => <span className="busterCards" key={ind}>*</span>)}</div>)
      }

    })
    return divArray;
  }

  return (
    <div style={{textAlign: 'center'}}>
      <label style={{color:"#008B8B"}}>הכנס גובה מגדל:</label><br></br>
      <input type="number" className="_heightRectangle inputs" onChange={onChangeheight} style={{borderRadius: "10px solid"}} />
      <br></br><br></br>
      <label style={{color:"#008B8B"}}>הכנס רוחב מגדל:</label><br></br>
      <input type="number" className="_widthRectangle inputs" onChange={onChangeWidth} style={{borderRadius: "10px solid"}}/>
      <br></br><br></br>
      <button className="perimeter inputs" onClick={perimeter} style={{borderRadius: "10px solid", backgroundColor: "#1199aa", color:"white"}}>לחץ להיקף המגדל</button><br></br><br></br>
      <button className="printTriangle inputs" onClick={printTriangle} style={{borderRadius: "10px solid", backgroundColor: "#1199aa", color:"white" }}>לחץ להדפסת המגדל</button><br></br><br></br>
      {printing && <div style={{textAlign: 'center', color:"#008B8B"}}>{drawStars()}</div>}<br></br>
      {result && <div style={{color:"#008B8B"}}>היקף מגדל: {result}</div>}
    </div>
  )
}
