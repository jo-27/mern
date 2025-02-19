function Home(properties){
    var styling={
        textAlign:"center",
        backgroundColor:"black",
        color:"white"
    }
    var a=10;
    return (
        <div>
            <h1 style={styling}>home page</h1>
            <h2>i am going to pass props in the next tag</h2>
            <h3>props : {a} </h3>  
            <h3>props:{styling.backgroundColor}</h3>
            <h3>props:{properties.sjit},{properties.properties}</h3>
        </div>
    )
}
export default Home;
