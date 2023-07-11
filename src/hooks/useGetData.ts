import { useEffect, useState, useReducer } from "react";


interface Action{
    type: "INIT_REQUEST" | "REQUETS_FAILURE" | "REQUEST_SUCCESS" ;
    payload?: {
                error?: any;
                data?: any;
                 }
}

 function reducer(state, action: Action){
    switch(action.type){
        case "INIT_REQUEST":
            return { loading: true, 
                    error: null, 
                    data:null };             
        case "REQUETS_FAILURE":
            return { loading: false, 
                    error: action.payload.error, 
                    data:null };              
        case "REQUEST_SUCCESS":
            return { loading: false, 
                    error:null, 
                    data: action.payload.data,  }
           
    }
 }


export function useGetData<T>(API_URL: string){
    const [state, dispatch] = useReducer(reducer, {
        loading:true,
        error: null,
        data: null,
    });


    // const [data, setData] = useState<T | null >(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState<boolean>(true);
 
    useEffect(() => {
        requestData()
    }, []);
    
    
    async function requestData(){
        try{
         dispatch({type: "INIT_REQUEST"})
        const response = await fetch(API_URL)
        const json = await response.json()
    
    
        if (json.error){
            dispatch({type: "REQUETS_FAILURE", payload: {error:json.error}})
           
        } else{
            dispatch({type: "REQUEST_SUCCESS", payload: {data:json}})
            
        }
    
    }catch (e){
        console.error("error", e)
        }
    }

    return {data: state.data, error: state.error , loading: state.loading}
    

}

