import { WebClient } from "@slack/client";

// Create a new instance of the WebClient class with the token stored in your environment variable
const web = new WebClient(process.env.SLACK_ACCESS_TOKEN);

web.conversations
  .list({
    types: "private_channel"
  })
  .then(data => {
    console.log(
      (data as any).channels.find((channel: any) => {
        return channel.name == "code-32";
      })
    );
  });

// web.chat.postMessage({
//   text: "Hello class from Alexandra!",
//   channel: "GMTNDV0MR"
// });

// web.chat.postMessage(
//   "GMTNDV0MR" as any,
//   JSON.stringify("Hello group-32 from slack-API") as any
// );
