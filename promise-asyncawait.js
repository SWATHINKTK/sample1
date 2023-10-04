// 

// const api = fetch('https://github.com/SWATHINKTK/');
// const api1 = fetch('https://www.google.co.in/')
// console.log(api)
// console.log(api1)
// api
// .then((data)=>{
//         console.log("connection estblished git ")
//         // console.log(api)

//     })
//     api1
//         .then((data)=>{
//             console.log("connection estblished google")
//         })
//     .catch((err)=>{
//         console.log("connection lost\n",err)
//         console.log(api)
//     })


// const api = fetch('https://github.com/SWATHINKTK/');
// const api1 = fetch('https://www.google.co.in/');

// api
//     .then((response) => {
//         console.log("GitHub Connection established");
//         return response.text(); // or response.json() if you expect JSON data
//     })
//     .then((data) => {
//         // Handle the data from GitHub here
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("GitHub Connection lost\n", err);
//     });

// api1
//     .then((response) => {
//         console.log("Google Connection established");
//         return response.text(); // or response.json() if you expect JSON data
//     })
//     .then((data) => {
//         // Handle the data from Google here
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Google Connection lost\n", err);
//     });





// const api = fetch('https://github.com/SWATHINKTK/');
// const api1 = fetch('https://www.google.co.in/');

// Promise.all([api, api1])
//     .then(([response1, response2]) => {
//         console.log("Both connections established");
//         return Promise.all([response1.text(), response2.text()]);
//     })
//     .then(([data1, data2]) => {
//         console.log("GitHub Data:\n");
//         console.log("Google Data:\n");
//     })
//     .catch((err) => {
//         console.log("Connection lost for one or both requests\n", err);
//     });

// async function getvalue()
// {
//     console.log("blocked");
//     const data = await fetch('https://github.com/SWATHINKTK/');
//     console.log("Unblocked");
//     console.log("connection established");
//     return data;
// }


// console.log("start");
// getvalue();
// console.log("end");