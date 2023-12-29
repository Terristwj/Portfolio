"use server";

const Configuration = require("openai");
const OpenAIApi = require("openai");

// OpenAI Setup
const OPENAI_APIKEY = process.env.OPENAI_APIKEY;
const configuration = new Configuration({
    apiKey: OPENAI_APIKEY,
});
const openai = new OpenAIApi(configuration);

// ////////////// //
// Settings START //
// ////////////// //
// Model configuration
const model = "gpt-3.5-turbo";
// Content configuration
let content = "You are a profanity checker and negativity checker.";
content +=
    "If any sentence contain profanity or inappropriateness, return 'true'.";
content +=
    "If any sentence contain negativity, hate speeches or sarcasm, return 'true'.";
content +=
    "If there are age-restricted words like 'gay', 'lesbian', 'seman', or any bad wordplay, return 'true'.";
content += "If any sentence contain racial slurs, return 'true'.";
content +=
    "If any sentence contain political slender like 'Lee Kuan Yew' or 'Trump', return 'true'.";
content +=
    "If any sentence contain religious slender like 'jesus' or 'muslim', return 'true'.";
content += "If not 'true', return 'false'";
// System configuration
const system = {
    role: "system",
    content,
};
// //////////// //
// Settings END //
// //////////// //

export async function isProfaneAI(prompt: string) {
    "use server";

    const completion = await openai.chat.completions.create({
        model,
        messages: [system, { role: "user", content: prompt }],
    });

    // Debugging
    // console.log(prompt);
    // console.log(completion.choices[0].message.content);

    // Return true if:
    //  1) Profane
    //  2) Inappropriate
    //  3) Negative
    //  4) Hate speech
    //  5) Sarcasm
    //  6) Age-restricted words
    // Else return false
    if (completion.choices[0].message.content.toLowerCase().includes("true")) {
        console.log("AI detected profanity/negativity in:", prompt);
        return true;
    } else return false;
}
