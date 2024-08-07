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

// System configuration
const system: ISystem = {
    role: "system",
    content,
};

// Settings - END ==================================================================== //

export async function isProfaneAI(prompt: string): Promise<boolean> {
    "use server";

    const completion = await openAI.chat.completions.create({
        model,
        messages: [system, { role: "user", content: prompt }],
    });

    const response = completion.choices[0].message.content;

    // Logs / Debugging
    console.log(`Someone asked: ${prompt}`);
    console.log(`OpenAI responded is profane: ${response}`);

    // Return true if:
    //  1) Profane
    //  2) Inappropriate
    //  3) Negative
    //  4) Hate speech
    //  5) Sarcasm
    //  6) Age-restricted words
    // Else return false
    if (response.includes("true")) {
        console.log("AI detected profanity/negativity in:", prompt);
        return true;
    } else return false;
}
