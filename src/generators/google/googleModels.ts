export const enum GoogleTextGenModel {
    GEMINI_2_5_FLASH = "gemini-2.5-flash", // Corrected model ID
    GEMINI_2_5_PRO = "gemini-2.5-pro",     // Corrected model ID
}

export const googleTextGenModels: Record<GoogleTextGenModel, string> = {
    [GoogleTextGenModel.GEMINI_2_5_FLASH]: "Gemini 2.5 Flash", // Updated display name
    [GoogleTextGenModel.GEMINI_2_5_PRO]: "Gemini 2.5 Pro",     // Updated display name
};

export const enum GoogleEmbeddingModel {
    TEXT_EMBEDDING_004 = "text-embedding-004",
}

export const googleEmbeddingModels: Record<GoogleEmbeddingModel, string> = {
    [GoogleEmbeddingModel.TEXT_EMBEDDING_004]: "Text Embedding 004",
};
