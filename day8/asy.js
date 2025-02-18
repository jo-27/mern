// //async/await(program runs multiple functions simultaneously) continuation
// async function asf(){
//     console.log("hello")
// }
// console.log(asf()) //hello, Promise { undefined }

// async function asf(){
//     var a=10
//     setTimeout(function(){
//         console.log("hello")
//     },5000) 
//     console.log(a)    //Promise { undefined }, hello(after 5000ms)
// }
// console.log(asf().then((res)=>{
//     console.log(res)
// }))

// //promise:
// //syntax:new promise((resolve,reject))
// function promiseEg(){
//     return new Promise((resolve,reject)=>{
//         resolve("the promise is resolved")
//     })
// }
// console.log(promiseEg()) //Promise { 'the promise is resolved' }

// function promiseEg(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("the promise is resolved")
//         },1000)
//     })
// }
// // console.log(promiseEg()) //Promise { <pending> } //if no console.log() nothing will be printed
// promiseEg().then((res)=>{
//     console.log(res) //the promise is resolved
// })

// function promiseEg(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("the promise is resolved")
//             }
//             else{
//                 reject("the promise is rejected due to value unmet")
//             }
//         },1000)
//     })
// }
// promiseEg(true).then((res)=>{
//     console.log(res) //the promise is resolved
// })

// promiseEg(false).then((res)=>{
//     console.log(res) //This error originated either by throwing inside of an async function without a catch
//     //  block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the 
//     // reason "the promise is rejected due to value unmet".
// })

// promiseEg(false).then((res)=>{
//     console.log(res)
// }).catch((res)=>{
//     console.log(res) //the promise is rejected due to value unmet
// })

// //location finder
// 1.promise(locFound,locNotFound)
// 2.chennai,2000

// function locationFinder(loc,time){
//     var location=new Promise((locFound,locNotFound)=>{
//         setTimeout(()=>{
//             if(isLocationFound(loc,time)){
//                 locFound("chennai")
//             }
//             else{
//                 locNotFound(loc+"not found")
//             }
//         },time)
//     })
//     location.then((found)=>{
//         console.log(found)
//     }).catch((notFound)=>{
//         console.log(notFound)
//     })
// }
// isLocationFound=(loc,time)=>{
//     location="chennai"
//     t=3000
//     if(loc===location && t<=time)return true
//     else return false
// }
// console.log(locationFinder("chennai",2000))

//insta console demo for post,like,comment,share
// function postCode(){
//     var post=new Promise((createPost)=>{
//         createPost("post created successfully")
//     })
//     console.log(post) //Promise { 'post created successfully' }
// }
// postCode() 

// async function postCode(){
//     var post=new Promise((createPost)=>{
//         createPost("post created successfully")
//     })
//     console.log(post) //Promise { 'post created successfully' }
// }
// postCode() 

//console.log outside-Promise { undefined }
//inside=Promise { 'post created successfully' }
//console.log(await post)-post created successfully

shareCode =async ()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("shared the post Successfully")
        },5000);
    })
}

commentCode =async ()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("commented the post Successfully")
        },5000);
    })
}

likeCode=()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
        likePost("post liked successfully")
    },5000)
})
}

async function postCode(){
    var post=new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("post created successfully")
        },5000)
    })
    const[pos,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])  //simultaneously after 5 seconds
    console.log(pos) 
    console.log(like)
    console.log(comment) 
    console.log(share)
}
postCode() 