// Delay function
export const wait: (seconds: number) => unknown = async (seconds: number) =>
    await new Promise(
        (resolve: (value: unknown) => void): NodeJS.Timeout =>
            setTimeout(resolve, seconds * 1000)
    );

// Multi-line classnames
export const multilineClassNames: (...classes: string[]) => string = (
    ...classes: string[]
): string => classes.join(" ");
