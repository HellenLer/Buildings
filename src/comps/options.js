import React from 'react'
import { Link, Outlet } from 'react-router-dom';


export default function Options() {
  return (
    <>
      <nav role="navigation" style={{textAlign: 'center', color:"#008B8B"}}>
        <Link to="/rectangle" >בניין בצורת מלבן או ריבוע</Link><br></br>
        <Link to="/triangular">בניין בצורת משולש</Link><br></br>
        <Link to="/exit">יציאה מהתכנית</Link><br></br><br></br>

      </nav>
      <Outlet />
    </>
  )

}