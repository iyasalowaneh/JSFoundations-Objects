const channels = require("./channels.json");

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * BONUS: use iteration method `.reduce()`
 ****************************************************************/

const totalVideosDuration = (channel) =>
  channel.videos.reduce(function (total, totduration) {
    return total + totduration.duration;
  }, 0);
console.log(totalVideosDuration(channels[0]));

// const sum = channel.reduce((acc, elem) => {
//   return acc + elem.duration, 0;
// });
// console.log(sum);
// console.log(totalVideosDuration(channels));

// console.log(numberOfVideos(channels[0]));
//}
//console.log(totalVideosDuration(channels));

//console.log(channels.reduce(reduser));
//const sum = channels[0].videos.reduce(function (total, channel) {
// return total + channel.duration;
//}, 0);
//console.log(sum);

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * BONUS: use iteration method `.sort()`
 ****************************************************************/
//function channelWithMostContent(channels) {
// Your code here
//}
const channelWithMostContent = (channels) => {
  let x = channels.sort(function (a, b) {
    let d1 = totalVideosDuration(a);
    let d2 = totalVideosDuration(b);
    return d2 - d1;
  });

  return channels.slice(0, 1);
};
/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * BONUS: use iteration method `.sort()`
 ****************************************************************/

const longestChannelName = (channels) => {
  let longest = channels.sort(function (chaa, chab) {
    let n1 = chaa.name;
    let n2 = chab.name;

    if (n1 < n2) {
      return -1;
    }
    if (n2 > n1) {
      return 1;
    }
    return 0;
  });

  return channels.slice(0, 1);
};
// Check your answers by running this file and comparing what it logs

//console.log(totalVideosDuration(channels[0]));
// Should log:

// 636

console.log(channelWithMostContent(channels));
// Should log:

// {
//   name: "PowerfulJRE",
//   description: "The Joe Rogan Experience podcast",
//   videos: [
//     { title: "Joe Rogan Experience #1480 - Kevin Hart", duration: 121 },
//     { title: "Joe Rogan Experience #1470 - Elon Musk", duration: 120 },
//     { title: "Joe Rogan Experience #1477 - Tony Hawk", duration: 102 },
//     { title: "Joe Rogan Experience #1413 - Bill Maher", duration: 118 },
//     { title: "Joe Rogan Experience #1208 - Jordan Peterson", duration: 175 },
//   ],
// }

console.log(longestChannelName(channels));
// Should log:

// {
//   name: "Alternate History Hub",
//   description: "An entire channel dedicated to the 'What If?'.  Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.",
//   videos: [
//     { title: "What if Rome Never Existed? Part III", duration: 19 },
//     {
//       title: "What if Trump Was Never Elected President?",
//       duration: 4,
//     },
//     {
//       title: "How A Corporation Conquered A Sub-Continent",
//       duration: 18,
//     },
//     {
//       title: "What if Antarctica Was A Green Continent?",
//       duration: 18,
//     },
//     {
//       title: "Why Tyrion's Solution For Westeros Doomed Everyone",
//       duration: 8,
//     },
//     { title: "What if Napoleon Never Fell?", duration: 10 },
//   ],
// }
