import axios from "axios";

import type { Article } from "../types/article";

interface ArticleRespons {
    hits: Article[];
    nbPages: number;
}

export async function fetchArticles(topic: string, page: number) {
    const { data } = await axios.get<ArticleRespons>
        ("http://hn.algolia.com/api/v1/search", {
        params: {
            query: topic,
            page
        }
    });
    return data;
}