import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    useEffect(() => {
        setState({
            ...state,
            isLoading: true,
        });

        (async () => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();

                setState({
                    data,
                    isLoading: false,
                    hasError: null
                });
            } catch (error) {
                console.error(error);
            }
        })()

    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
