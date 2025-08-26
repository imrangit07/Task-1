import React from 'react'

const Header = () => {
  return (
    <div style={{ backgroundColor: '#000',width:'100%',height: '50px',display:"flex",alignItems:"center",justifyContent:"center"}}>
        <ul style={{display:"flex",alignItems:"center",justifyContent:"center",listStyleType:'none',gap:"40px",fontSize:"18px",color:"#fff"}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header