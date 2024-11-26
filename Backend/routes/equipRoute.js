import express from "express";
import { addEquip ,listEquip,removeEquip} from "../controllers/equipController.js";
import multer from "multer";

const equipRouter=express.Router();

//Image Storage Engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})
equipRouter.post("/add",upload.single("image"),addEquip)
equipRouter.get("/list",listEquip)
equipRouter.post("/remove",removeEquip);
export default equipRouter;