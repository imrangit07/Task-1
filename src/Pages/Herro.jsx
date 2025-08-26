import herro_img from "../../public/imran.jpg"

const Herro = () => {
    return (
        <div style={{ width: '100vw', height: "100vh", display: "flex", alignItems: "center", justifyContent: 'center', background: "#212e50",gap:"60px" }}>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div className="herro-image" style={{ width: "250px", height: "250px", background: "red", overflow: "hidden", borderRadius: "50%", }}>
                    <img src={herro_img} width="250px" alt="herro image" />
                </div>
                <div className="herro-title" style={{marginTop:'40px',textAlign:"center"}} >
                    <h1 style={{ color: "white", fontSize: "30px" }}>I am Imran Hussain</h1>
                    <h1 style={{ color: "white", fontSize: "30px" }}>MERN STACK DEVELOPER</h1>
                </div>
            </div>
        </div>
    )
}

export default Herro;
