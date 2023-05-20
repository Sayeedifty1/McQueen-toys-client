import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `McQueen | ${title}`;
    }, [title]);
    }

export default useTitle;