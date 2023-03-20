import dict from "./dict.json";

export const t = (key, lang) => dict[lang || "en"]?.[key] || key;
