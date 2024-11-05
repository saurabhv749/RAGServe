/**
 * Creates a prompt for the LLM given user query and context
 *
 * @param userQuery - The user's query
 * @param context - The context for the query
 * @returns A string prompt for the LLaMA model
 */
export const createPrompt = (userQuery: string, context: string) => `### Context:
    ---
    ${context}
    ---
    ### Question:
    ${userQuery}
    Note: Provide a short and witty response. No chinese characters.`

