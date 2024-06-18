import express from 'express'
import { createMember, getMember, updateMember, deleteMember } from '../controllers/MemberController.js'

const routers = express.Router()

routers.post("/create", createMember)
routers.get("/get", getMember)
routers.put("/update/:id", updateMember)
routers.delete("/delete/:id", deleteMember)

export default routers