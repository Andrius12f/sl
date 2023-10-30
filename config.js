const config = {
    TOKEN: "xoxc-6107229925360-6084236008770-6069701976519-f971ea046ba8df6fa74d0703653c26f406368154a528462e3a0dad3026458f09",
    COOKIE: "xoxd-IHj9ocpRJnbQNlEKK8Bz1pfj6RdK7uu%2BQ%2FFgC0I4bQWZUc%2B1zpyUUvk5XzvVZvpufQrotKngghJYIqoq668qAApuvEqyLLi%2Bq7eCf9Cm2kUXImn1T%2B952EF0RUkaK4vGSCt2nbrzEAjpGBlXxd0jmP2pqhmrl%2Bj8w37Zqe%2FAKPFyIOUIjQqDRPgoAAfiPGqgNMQ8L4KsXC8%3D",
    TEAM_ID: "df",
    CHANNEL: "D062URYHCF3",
    CLAUDE_USER: "U062G744WQ2",

    MAINPROMPT_LAST: false, // Will try to move the main prompt (main + nsfw prompt from SillyTavern) to the bottom, similar to a jailbreak
    MAINPROMPT_AS_PING: false, // Will use the main prompt as the ping message, if this true the PING_MESSAGE setting is ignored. Overrides MAINPROMPT_LAST.
    
    // If false will make Slaude send messages as plain text rather than through Slack's blocks format. The results in Slack should be the same either way.
    USE_BLOCKS: true,

    STREAMING_TIMEOUT: 240000, //Time in milliseconds after which the response stream will force close itself, 0 disables the timeout but is not recommended.

    // The final message we send with an @Claude ping to trigger his response. You can add "@Claude" to this string to control where the ping will be inside the message.
    // If there is no @Claude, the ping will automatically get added in front of the message.
    // Can be whatever you want it to be but keep in mind that it might result in unpredictable responses.
    // Anything we put here will eat into our max available tokens so keep it brief.
    PING_MESSAGE: "Assistant:",

    PORT: 5004
}

export default config;