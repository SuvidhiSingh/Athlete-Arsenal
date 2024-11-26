import equipModel from '../models/EquipModel.js';
import fs from 'fs'

//add equip item
const addEquip=async(req,res)=>{

    let image_filename=`${req.file.filename}`;

    const equip=new equipModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await equip.save();
        res.json({success:true,message:"Equipment Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all equipment list
const listEquip=async(req,res)=>{
try{
    const equips=await equipModel.find({});
    res.json({success:true,data:equips})
}catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
}
}

//remove equipment 
const removeEquip=async(req,res)=>{
    try{
        const equip=await equipModel.findById(req.body.id);
        fs.unlink(`uploads/${equip.image}`,()=>{})
        await equipModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Equipment Removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
export {addEquip,listEquip,removeEquip}