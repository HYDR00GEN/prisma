import server from "./server";
const PORT = process.env.PORT;

// const to make a soft disconnection later
const connection = server.listen(PORT, ()=>{
    console.log(`server express on port ${PORT} started...`);
})

//soft closing server
process.on("SIGINT", ()=>{
    connection.close(()=>{
        console.log("...server is closing")
    })
})