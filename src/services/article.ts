import axios from "axios";

import type { Article } from "../types/article";

export async function fetchArticles(topic: string) {
    const { data } = await axios.get<{ hits: Article[] }>
        ("http://hn.algolia.com/api/v1/search", {
        params: {
            query: topic
        }
    });
    return data;
}