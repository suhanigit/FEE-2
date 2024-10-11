let url = "https://catfact.ninja/fact";

async function getData(){
    let res = await fetch(url);
    let adta = await fetch(url);  
    // console.log(res.json);
    console.log(res);
}
getData();

// Fetch data ko synchronous way mai execute krta ha
/* async asynchronous way mai execution krata ha 
initially data present ni hota ha API mai toh async undefined return krta ha
Problem resolved using AWAIT--> await will wait until the data is finally fetched from url
                            --> promise ko return krega
*/