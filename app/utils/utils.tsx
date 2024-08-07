// Delay function
export const wait: (seconds: number) => unknown = async (seconds: number) =>
    await new Promise(
        (resolve: (value: unknown) => void): NodeJS.Timeout =>
            setTimeout(resolve, seconds * 1000)
    );
