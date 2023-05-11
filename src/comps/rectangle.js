import React, { useState } from "react";

export default function Rectangle() {
    const [height, setHeight] = useState(0);
    const [widthValid, setWidthValid] = useState(true)
    const [width, setWidth] = useState(0);
    const [result, setResult] = useState(null);


    function calc() {
        if(Math.abs(height-width)>5 || height==width)
          setResult(height*width);
        else   
          setResult((height*2) +(width*2));


    }

     const onChangeWidth = e => {
        const widthNum = Number(e.target.value)
        setWidth(widthNum)
        setWidthValid(widthNum)
    }

    return (
        <div style={{textAlign: 'center'}}>
            <label style={{color:"#008B8B"}}>הכנס גובה מגדל:</label><br></br>
            <input type="number" name="_heightRectangle" min='2' style={{borderRadius: "10px solid"}} onChange={(e) => setHeight(Number(e.target.value))} />
            <br></br><br></br>
            <label style={{color:"#008B8B"}}>הכנס רוחב מגדל:</label><br></br>
            <input type="number" name="_widthRectangle" min='0' style={{borderRadius: "10px solid"}} onChange={onChangeWidth} />
            {!widthValid && <span style={{color:"#008B8B"}}>האם יתכן בניין ברוחב 0 או קטן ממנו?</span>}
            <br></br><br></br>
            <button name="_selected" onClick={calc}style={{borderRadius: "10px solid", backgroundColor: "#1199aa", color:"white"}}>לחץ לנתוני מגדל</button>
            <br></br><br></br>
            <label style={{color:"#008B8B"}}>{!!result && <span>{result}</span>}</label>
        </div>
    );
}