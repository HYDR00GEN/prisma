import { Router } from "express";
import prisma from "./prisma";
import path from "path";

const router = Router()

router.get("/", (req,res)=>{
    return res.send("RouteHome")
})

router.get("/api", (req,res)=>{
    return res.send("Route___APIII")
})

router.get("/web", (req,res)=>{
    console.log(__dirname);
    return res.sendFile(path.join(__dirname,"/public", "index.html"))
})


//asyc await from db requesT
router.get("/api/users", async (req,res)=>{
    const users = await prisma.users.findMany()
    return res.json(users);
})

router.post("/api/users", async (req,res)=>{
    const userData = req.body;
    const newUser = await prisma.user.create({data: userData})
    return res.json(newUser)
})

router.get("/api/users/:username", async (req,res)=>{
    // extracts username from req.params
    const {username} = req.params
    const users = await prisma.users.findUnique({where: {username}})
    return res.json(users);
})


export default router