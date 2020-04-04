var Feed = require('rss-to-json');
var express = require('express');
var cors = require('cors');
var parseString = require('xml2js').parseString;
var https = require('https');
var app = express();
app.use(cors());



urls = [
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCRWFSbif-RFENbBrSiez1DA",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCef1-8eOpJgud7szVPlZQAQ",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCt4t-jeY85JegMlZ-E5UWtA",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCIvaYmXn910QMdemBG3v1pQ",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC9CYT9gSNLevX5ey2_6CK0Q",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCPP3etACgdUWvizcES1dJ8Q",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCckHqySbfy5FcPP6MD_S-Yg",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCYPvAwZP8pZhSMW8qs7cVCw",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCLnuTrdp3MBzo9ZPig5szbQ"
    ]

// xmlToJson(url, function(err, data) {
//   if (err) {
//     // Handle this however you like
//     return console.err(err);
//   }

//   console.log(JSON.stringify(data, null, 2));
// }

YTFinalFeed='[';
app.get('/',function(req,res){
    res.send("working");
})

// app.get('/videoFeed', function (req, res) {
// //    res.send('Hello World');
//    Feed.load('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms', function(err,result){
//     //    res.send(result);
//       res.json(result);
//    });
// })

app.get('/videoFeed', function(req,res){

res.json(this.videoID);
})
// loopFeed().then((data)=>{
//         // console.log("inside resolve :"+typeof(data));
//         console.log("------------------------------------------------------------------MERGED FEED :"+data);
//         res.json(data);
//     });
  
  



// function tripOut () {
//     return new Promise((resolve)=>{
//         Feed.load('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms', function(err,result){
//         //     //    res.send(result);        
//         resolve(result);        //    });
//         });
//     });    
// }

// Promise.resolve(tripOut()).then((data)=>{
//     console.log("feed typr :"+typeof(data));
//         console.log("feeeed :"+JSON.stringify(data));
// });

app.listen(3000,function(){
    console.log('Server running at http://127.0.0.1:3000/');
});
 
var loadFeed =async function loopFeed(){
    //  promises=[];
          
            for(let i=0;i<this.urls.length;i++){              
                    // console.log(this.urls[i]);
                // console.log(this.urls[i]);
                // console.log(this.urls.length);
                // this.temp += await xmlToJson(this.urls[i]);  
                // this.promises.push(data);
                // console.log(data);
                    // if(i==0){                       
                    //     this.temp += await xmlToJson(this.urls[i])+",";  
                    // }
                    if(i==(this.urls.length-1)){
                        this.YTFinalFeed += await xmlToJson(this.urls[i])+"]"; 
                        //  Promise.resolve(this.temp);                          
                     } 
                     else{                 
                     this.YTFinalFeed+=await xmlToJson(this.urls[i])+",";           
                     }                   
               }

            //    console.log(this.YTFinalFeed);
               videoID=[];
               
                   // this.rssObj=res.items;
                   // console.log(JSON.parse(data.toString()));
                   for(let i=0;i<JSON.parse(this.YTFinalFeed.toString()).length;i++){
                         for(let j=0;j<JSON.parse(this.YTFinalFeed.toString())[i].feed.entry.length;j++){
                           var temp={
                             ytID:JSON.parse(this.YTFinalFeed.toString())[i].feed.entry[j]['yt:videoId'][0],
                             title:JSON.parse(this.YTFinalFeed.toString())[i].feed.entry[j].title[0],
                             link:JSON.parse(this.YTFinalFeed.toString())[i].feed.entry[j].link[0].$.href,
                             date:JSON.parse(this.YTFinalFeed.toString())[i].feed.entry[j].published[0],
                             views:JSON.parse(this.YTFinalFeed.toString())[i].feed.entry[j]['media:group'][0]['media:community'][0]['media:statistics'][0].$.views
                           }
                           this.videoID.push(temp);
                           // console.log(this.temp);
                         } 
                        }
                        console.log(JSON.stringify(this.videoID));
            //    Promise.all(this.promises).then((data)=>{
                //  console.log(this.YTFinalFeed);
                //  res.json(this.temp);
            //    });
               
       
    }
    loadFeed();

function xmlToJson(url, callback) {
    return new Promise((resolve)=>{
        var req = https.get(url, function(res) {
            var xml = '';
            
            res.on('data', function(chunk) {
              xml += chunk;
            });
        
            res.on('error', function(e) {
              callback(e, null);
            }); 
        
            res.on('timeout', function(e) {
              callback(e, null);
            }); 
        
            res.on('end', function() {
              parseString(xml, function(err, result) {
                // setTimeout(() => resolve(JSON.stringify(result)), 4000);
                // setTimeout(resolve(JSON.stringify(result)),5000);
                // console.log(url+"-----------------------------------------------"+result); 
               resolve(JSON.stringify(result));
              });
            });
          });
    })
    
  }
 
