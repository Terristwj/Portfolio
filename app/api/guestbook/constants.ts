// Environment Variables
// - If is development, use the local JSON file
//   - Avoid creating temp in local computer
// - If is production, use the temp JSON file
//   - Vercel does not support write files
const IS_PROD: string | undefined = process.env.IS_PROD;
const isProd: boolean = IS_PROD === "true";

export default isProd;
