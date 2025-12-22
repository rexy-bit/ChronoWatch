import  { memo } from "react";
import { useItemsContext } from "../../Contexts/ItemsContexts"

const FilterComponent = () => {

    const {filterData, setFilterData} = useItemsContext();

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {


         const {name, value} = e.target;

         setFilterData({
            ...filterData,
            [name] : value
         });
    }

    return(
        <div className="flex flex-col gap-5 mt-12 p-3 border border-gray-400 rounded-lg">
            <select 
            name="type" 
            id=""
            value={filterData.type}
            onChange={handleChange}
            className="border-b w-[250px] px-2"
            >
                <option value="" disabled selected>
                    Select a Type
                </option>

                <option value="Analog">Analog</option>
                <option value="Digital">Digital</option>
                <option value="Sport">Sport</option>
                <option value="Smartwatch">Smartwatch</option>

            </select>

            <select 
            name="category" 
            id=""
            className="border-b w-[250px] px-2"
            value={filterData.category}
            onChange={handleChange}
            >
                <option value="" disabled selected>
                    Select a Category
                </option>

                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Uni</option>
            </select>

            <select 
            name="brand" 
            id=""
            value={filterData.brand}
            className="border-b w-[250px] px-2"
            onChange={handleChange}
            >
                <option value="" disabled selected>
                    Select a Brand
                </option>

               <option value="Casio">Casio</option>
               <option value="Tissot">Tissot</option>
               <option value="Fossil">Fossil</option>
               <option value="Hublot">Hublot</option>
               <option value="Rolex">Rolex</option>
               <option value="Omega">Omega</option>
               <option value="Cartier">Cartier</option>
            </select>
        </div>
    )
}

export default memo(FilterComponent);