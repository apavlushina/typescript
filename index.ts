import { WebClient } from "@slack/client";

// Create a new instance of the WebClient class with the token stored in your environment variable
const web = new WebClient(process.env.SLACK_ACCESS_TOKEN);

web.conversations
  .list({
    types: "public_channel, private_channel"
  })
  .then(data => {
    console.log(
      (data as any).channels.filter((channel: any) => {
        channel.name.includes("code");
      })
    );
  });
