// var topic = "HTML";
// if (topic === 'HTML') {
//     console.log("Let's study HTML");
// } else {
//     console.log("this is getting dumb");
// }

// var shapes = ["triangle","square","pentagon","circle"];
var topics = ["HTML","CSS","GIT","JavaScript"]
function listtopics() {
    for( var x = 0; x < topics.length; x++ ) {
        console.log(topics[x]);
    }
}

listtopics();

var randomTopic = topics[Math.floor(Math.random() * topics.length)];
console.log( "Random topic " + randomTopic);


