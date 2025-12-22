import  { memo } from "react"
import type { Item } from "../../Contexts/Types"
import StarsRating from "./StarsRating";


const ItemCard = ({item} : {item : Item}) => {


    return(
        <div className="flex flex-col w-[220px] border border-gray-500 h-[400px] p-5 rounded-[5px]">
            <img src={item.images[0]} alt="WatchImage/0" className="w-[200px] h-[200px] object-contain cursor-pointer transition-opacity duration-200 hover:opacity-70"/>

            <div className="flex flex-col mt-5 gap-1">
                <p>{item.name}</p>
                <StarsRating note={item.rate}/>
                <p className="text-[18px] font-[600]">{item.price} Dzd</p>
            </div>

            <button className="py-2 px-5 text-white bg-gray-900 mt-5 font-bold cursor-pointer transition-opacity duration-300 hover:opacity-70 active:opacity-50">
                Add To Cart
            </button>
        </div>
    );
}

export default memo(ItemCard);