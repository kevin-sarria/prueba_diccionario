import { useEffect, useState } from "react";

type HistoryItem = { word: string; time: string };

export const useHistory = () => {
    const [history, setHistory] = useState<HistoryItem[]>(() => {
        // Inicializar con el historial existente en localStorage
        const storedHistory = localStorage.getItem("history");
        return storedHistory ? JSON.parse(storedHistory) : [];
    });

    const addWordToHistory = (word: string) => {
        const currentTime = new Date().toLocaleString();
        const newEntry: HistoryItem = { word, time: currentTime };

        const updatedHistory = [newEntry, ...history];
        setHistory(updatedHistory);
        localStorage.setItem("history", JSON.stringify(updatedHistory));
    };

    return { history, addWordToHistory };
};
