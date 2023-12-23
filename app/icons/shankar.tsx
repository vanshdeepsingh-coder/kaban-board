export default function shankar(){
    return (
        <div style={{backgroundColor:"orange",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        fontSize: "0.5rem",
        fontWeight: "400",
        color: "white",
        position: "relative"
      }}>
            <div>SK</div>
            <div style={{backgroundColor:"gray",
                position: "absolute",
                bottom: "0px",
                right: "0px",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                outline: "1px solid white"}}></div>
        </div>
    );
}