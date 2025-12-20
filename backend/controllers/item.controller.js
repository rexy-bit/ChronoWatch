
import Item from "../models/item.model.js"



export const getAllItems = async(req , res , next) => {

    try{

        const items = await Item.find();

        res.status(200).json({
            success :true,
            data : items
        });
    }catch(err){
        next(err);
    }

}


export const searchItem = async(req , res , next)  => {

    try{

        const {search} = req.body;

        if(!search || search.trim() === ""){
            const allItems = await Item.find();

            return res.status(200).json({
                success : true,
                data : allItems
            });

        }

        const regex = new RegExp(search, "i");

        const items = await Item.find({
            $or : [
                {name : regex},
                {categorie : regex},
                {keyWords : {$in : [regex]}}
            ]
        });

        res.status(200).json({
            success : true,
            count : items.length,
            data : items
        });


    }catch(err){
        next(err);
    }
}


export const getItem = async(req , res , next) => {

    try{

        const {id} = req.params;

        const item = await Item.findById(id);

        if(!item){

            return res.status(404).json({
                success : false,
                message : "Error Item not Found"

            });
        }

        res.status(200).json({
            success : true,
            message : "Item found",
            data : item
        });


    }catch(err){
        next(err);
    }
}


export const getMen = async(req , res , next) => {

    try{

        const menCat = await Item.find({category : "men"});

        res.status(200).json({
            success : true,
            data : menCat
        });

    }catch(err){
        next(err);
    }
}


export const getWomen = async(req , res, next) => {

    try{

        const womenCat = await Item.find({category : "women"});

        res.status(200).json({
            success : true,
            data : womenCat
        });
    }catch(err){
        next(err);
    }
}



