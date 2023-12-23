export default function ap(){
    return (
        <div style={{backgroundColor:"rgb(199,0,57)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        fontSize: "0.5rem",
        fontWeight: "400",
        color: "white",
        position: "relative",
        marginLeft:"10px"
      }}>
            <div>AS</div>
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