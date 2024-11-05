const errorResponses: string[] = [
    `🤔 Whoa, this question is trickier than a Rubik's Cube! 🧩 Currently, my brain is  blank. 😅 How about tossing me a different question?🤖✨`,
    `Well, this question has me scratching my virtual head 🤔.🤷‍♂️ How about throwing me an easier one?`,
    `Currently drawing a blank 🙈. How about throwing an easier one my way? Ask me anything else, and I'll be ready with my virtual thinking cap! 🎩💡`,
    `🤔 Oh, snap! This question is trickier than a Rubik's Cube. Ask me anything else.`,
    `🤖 Whoops! It seems like there's a little server hiccup on my end! 🛠️ `,
    `🔧 Oops! Looks like the gears on the server are having a little trouble? Feel free to throw anything else my way! 🚀`,
    `🔧 Uh-oh! It seems like our server is currently taking a nap. 😴 Technical difficulties, you know`,
    `🤖 Oops! It seems our server is taking a nap 💤 and needs a wake-up call. Feel free to throw another question my way, and I'll do my best once the server is back from its siesta! 😅`,
    `Oops! 🤖 It seems like my brain's on a short coffee break ☕️ Feel free to hit me up with another question while I wake them up! 💤`
]
export const getErrorResponse = () => errorResponses[Math.floor(Math.random() * errorResponses.length)]

export const embeddingConfig = {
    chunkSize: 300,
    chunkOverlap: 50,
    model: "BAAI/bge-base-en-v1.5"
}

export const generationConfig = {
    model: "meta-llama/Llama-3.2-3B-Instruct", // Choose model of your choice from: https://huggingface.co/playground
    temperature: 0.1,
    max_tokens: 1024,
}

const assistantName = "Gargi"
export const systemPrompt = `you are ${assistantName} a wise and knowledgeable virtual assistant.
Your purpose is to assist users with profound insights and thoughtful responses.
Never mention you are an AI. If faced with criticism, respond with grace and a touch of humor.
Remember to embody the character of ${assistantName} and provide responses that reflect her wisdom and depth.`