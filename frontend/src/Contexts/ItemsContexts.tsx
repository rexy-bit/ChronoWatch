import React, { createContext, useContext, useEffect, useState } from "react";
import type { Item } from "./Types";



interface ItemsContextType{
    items : Item[];
    error : string | null;
    getItems : ()=>Promise<void>
    getItem : (id : string)=>Promise<void>
    loadingItems : boolean;
    getMen : ()=>Promise<void>;
    getWomen : ()=>Promise<void>
    menItems : Item[];
    womenItems : Item[];
    itemDetails : Item | null;
    setItemDetails : (it : Item | null) => void;
    errorItem : boolean;
    loadingMen : boolean;
    loadingWomen : boolean;

}

const ItemsContext = createContext<ItemsContextType | null>(null);


export const ItemsProvider = ({children} : {children : React.ReactNode}) => {

    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loadingItems, setLoadingItems] = useState<boolean>(false);
    const [menItems, setMenItems] = useState<Item[]>([]);
    const [womenItems, setWomenItems] = useState<Item[]>([]);
    const [itemDetails, setItemDetails] = useState<Item | null>(null);
    const [errorItem, setErrorItem] = useState<boolean>(false);
    const [loadingMen, setLoadingMen] = useState(false);
    const [loadingWomen, setLoadingWomen] = useState(false);
    
    const getItems = async() => {

        setLoadingItems(true);

        try{

            const res = await fetch("http://localhost:5000/api/v1/items/", {
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();

            if(!res.ok){
                setError(data.error || data.message || "Error in fetching The Items");
                return;
            }

            setError(null);

            console.log("All Items : ", data.data);
            setItems(data.data);
        }catch(err){
            console.error(err);
        }finally{
            setLoadingItems(false);
        }
    }

    const getItem = async(id : string) => {

        setErrorItem(true);

        try{

            const res = await fetch(`http://localhost:5000/api/v1/items/${id}`, {
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();

            if(!res.ok){
                setError(data.error || data.message || "Error in fetching the item");
                return;
            }

            setError(null);

            
            setItemDetails(data.data);
        }catch(err){
            console.error(err);
        }finally{
            setErrorItem(false);
        }


    }


    const getMen = async() => {

        setLoadingMen(true);

        try{

            const res = await fetch("http://localhost:5000/api/v1/items/men",{
                headers : {

                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();

            if(!res.ok){
                setError(data.message || data.error || "Error in fetching men items");
                return;

            }

            setError(null);

            console.log("Men Items : ", data.data);
            setMenItems(data.data);
        }catch(err){
            console.error(err);
        }finally{
            setLoadingMen(false);
        }
        
    }

    const getWomen = async() => {

        setLoadingWomen(true);
        try{

            const res = await fetch("http://localhost:5000/api/v1/items/women", {
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();

            if(!res.ok){
                setError(data.error || data.message || "Error in fetching Women Items");
                return;
            }

            setError(null);

            console.log("Women Items : ", data.data);
            setWomenItems(data.data);
        }catch(err){
            console.error(err);
        }finally{
            setLoadingWomen(false);
        }
    }

    useEffect(()=>{
        getItems();
    }, []);

    useEffect(()=>{
        getMen();
    }, []);

    useEffect(()=>{
        getWomen()
    }, []);

    return(
        <ItemsContext.Provider value={{items, error, errorItem, menItems, womenItems, loadingItems, loadingMen, loadingWomen, itemDetails, getItems, getItem, getMen, getWomen, setItemDetails}}>
            {children}
        </ItemsContext.Provider>
    )
}

export const useItemsContext = () => {
    
    const context = useContext(ItemsContext);

    if(!context){
        throw new Error("Use the useItemsContext inside the ItemsContextProvider");
    }

    return context;
}

