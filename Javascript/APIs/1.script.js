let url = "https://catfact.ninja/fact";

async function getData(){
    try{
    let res = await fetch(url);
    let data = await fetch(url);  
    // console.log(res.json);
    console.log(res);
    console.log(data);
    console.log(data.fact);
    }
    catch(e) {
        console.log("Error!",e);
    }
}
getData();

// Fetch data ko synchronous way mai execute krta ha
/* async asynchronous way mai execution krata ha 
initially data present ni hota ha API mai toh async undefined return krta ha
Problem resolved using AWAIT--> await will wait until the data is finally fetched from url
                            --> promise ko return krega
*/

