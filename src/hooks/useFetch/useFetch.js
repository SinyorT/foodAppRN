import { useState, useEffect } from 'react';
import axios from '../../../axios'; 

const useFetch = (type,url) => {
    const [data,setData] =useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url);
            setData(responseData[type]); 
          } catch (err) {
            setError(true);
          } finally {
            setLoading(false);
          }
    }
    return {data, error, loading};
}

export default useFetch;
