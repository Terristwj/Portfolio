"use server";

const Configuration = require("openai");
const OpenAIApi = require("openai");

// OpenAI Setup - START ================================================================ //
const OPENAI_APIKEY: string | undefined = process.env.OPENAI_APIKEY;
const configuration: any = new Configuration({
    apiKey: OPENAI_APIKEY,
});
const openAI = new OpenAIApi(configuration);
// OpenAI Setup - END ================================================================== //

interface ISystem {
    role: string;
    content: string;
}

// Settings - START ==================================================================== //

// Model configuration
// - https://openai.com/api/pricing/
// const model: string = "gpt-3.5-turbo";
const model: string = "gpt-4o-mini";

// Content configuration
// - Profanity and negativity check
let content: string = "You are a profanity checker and negativity checker.";
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

// - Admin and staff check
content += "You are also an Admin and staff checker.";
content +=
    "If any sentence suggest that an admin is saying something, return 'true'.";
content += "If any sentence is impersonating as an admin, return 'true'.";
content +=
    "If any sentence suggest a staff is saying something, return 'true'.";
content += "If any sentence is impersonating as a staff, return 'true'.";

// - Exceptions
content += "But if it is a compliment to the admin, return 'false'.";
content +=
    "But if it is about 'programming god' or 'code god' compliments, return 'false'.";

// System configuration
const system: ISystem = {
    role: "system",
    content,
};

// Settings - END ==================================================================== //

export async function isProfaneAI(prompt: string): Promise<boolean> {
    "use server";

    const completion: any = await openAI.chat.completions.create({
        model,
        messages: [system, { role: "user", content: prompt }],
    });

    const response: any = completion.choices[0].message.content;

    // Logs / Debugging
    console.log("OpenAI API:");
    console.log(`\t- Prompt: ${prompt}`);
    console.log(`\t- OpenAI responded is profane/phishing: ${response}`);

    // Return true if:
    //  1) Profane
    //      1) Profanity / Inappropriate
    //      2) Negative / Hate speech / Sarcasm
    //      3) Age-restricted words / word-play
    //      4) Racial slurs
    //      5) Political slanders
    //      6) Religious slanders
    //  2) Phishing
    //      1) Admin impersonation
    //      2) Staff impersonation
    // Else return false
    //      1) If false, it is a compliment to the admin
    //      2) If false, it is a compliment like programming/coding god
    if (response.includes("true")) {
        console.log(
            "\t- AI ERROR: AI detected profanity/negativity in:",
            prompt
        );
        return true;
    } else return false;
}
