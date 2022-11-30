# Mautic.App
Mautic Integration with Rocket.Chat

## About this App
This App will provide integrations with between Rocket.Chat and Mautic.

## Working features
- Development Environment

## RoadMap
 - [OMNICHANNEL] Create new Mautic Contact on livechat creation or close
 - [OMNICHANNEL] Allow default Mautic segment on registration
 - [OMNICHANNEL] Add Contact from Mapped Mautic Segment on visitor transferred to Departments
 - [OMNICHANNEL] Add Commands
 - [OMNICHANNEL] Auto Search for new visitor chat on Mautic and present with iformations and actions
 - [TEAMCOLLAB] Add new Mautic Contact on user registration
 - [TEAMCOLLAB] Add/Remove Contact from Mapped Mautic Segment on user join/leave Rocket.Chat Channel
 - [TEAMCOLLAB] Create an endpoint to allow easy message to be sent for users or channels from a Mautic Campaign

## Help Needed!
If you have Mautic skills, please, help us!
We would love to create a matching Mautic App, that would help integrating better with Mautic.

## Getting Started
 - Clone this repo: `git clone https://github.com/dudanogueira/Mautic.App && cd Mautic.App`
 - Install npm dependencies `npm install`
 - Install Docker: `curl -L https://get.docker.com | sh`
 - Docker Up! `docker compose up`
 - You will get Rocket.Chat running at http://localhost:3000, `username/password: adminrc/admin`
 - You will get Mautic running at http://localhost:8880
 - You will get Mailhog running at http://localhost:8025/
 - Follow Mautic's wizard. 
   - At `Administrative User` create an admin user with password admin123 (don't change because of the API calls)
   - At the `Email Configuration`, add as follow:
     - hostname: mailhog
     - port: 1025
   - Login into your Mautic instance
   - Go to top right Settings > Configuration > Api Settings
     - *API enabled?*: Yes
     - *Enable HTTP basic auth?*: Yes
   - Save and Close
   - Now you should be able to request, for example:
    `curl --request GET --url http://localhost:8880/api/contacts --header 'Authorization: Basic YWRtaW46YWRtaW4xMjM='`
  - Install Mautic.App in Rocket.chat
    - run `rc-apps deploy`
    - Go to http://localhost:3000/admin/marketplace/installed
    - Go to Mautic App > Settings
    - 

## Documentation
Here are some links to examples and documentation:
- [Rocket.Chat Apps TypeScript Definitions Documentation](https://rocketchat.github.io/Rocket.Chat.Apps-engine/)
- [Rocket.Chat Apps TypeScript Definitions Repository](https://github.com/RocketChat/Rocket.Chat.Apps-engine)
- [Example Rocket.Chat Apps](https://github.com/graywolf336/RocketChatApps)
- Community Forums
  - [App Requests](https://forums.rocket.chat/c/rocket-chat-apps/requests)
  - [App Guides](https://forums.rocket.chat/c/rocket-chat-apps/guides)
  - [Top View of Both Categories](https://forums.rocket.chat/c/rocket-chat-apps)
- [#rocketchat-apps on Open.Rocket.Chat](https://open.rocket.chat/channel/rocketchat-apps)
