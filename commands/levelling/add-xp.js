module.exports = {
name: "add-xp",
aliases: "addxp",
usage: "add-xp < amount > < userID >",
code: `
**<:DiscordBotMaker:955637250518056971> Successfully added $numberSeparator[$message[1];,] xp to <@$get[u]>**
$setUserVar[xp;$sum[$getUserVar[xp;$get[u]];$message[1]];$get[u]]

$let[u;$findMember[$message[2];yes]]

$cooldown[2m;$getServerVar[error] **$username** You are **stll** on cooldown, \`%time%\` left]


$onlyIf[$message[1]<$getUserVar[req;$findMember[$message[2];yes]];$getservervar[error] **$username** Can't add xp that is greater than their req]

$onlyIf[$findMember[$message[2];yes]!=;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]`}