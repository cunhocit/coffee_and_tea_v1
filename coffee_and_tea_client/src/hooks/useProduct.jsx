import {getAllPrdAPI} from "../app/api/product";
import { useEffect, useState } from "react"

export const useProducts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchData = async () => {
        await getAllPrdAPI().then(
            response => {
                setData(response);
                setLoading(false);
            }
        )
        .catch(err => {
            console.log("Error: ", err);
            setLoading(false);
        })
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {data, isLoading, fetchData}
}
