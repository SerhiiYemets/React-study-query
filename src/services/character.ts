import axios from "axios";

import type { Character } from "../types/character"

export async function getCharacter(id: Character["id"]): Promise<Character> {
    const { data } = await axios.get<Character>(
        `https://swapi.info/api/people/${id}`
    );
    return data;
} 