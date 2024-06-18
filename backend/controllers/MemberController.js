import memberModel from '../models/Member.js'
import { calculateAge, sortByClosestBirthday } from '../utils/dateUtils.js';

const createMember = async (req, res) => {
    try {
        const { firstName, lastName, birthDate, country, city } = req.body
        const age = calculateAge(birthDate);

        if (age < 18) {
            return res.status(400).json({ success: false, Message: 'Member must be between 18-120 years old.' });
        }
        const newMember = new memberModel({ firstName, lastName, birthDate, country, city  })
        await newMember.save()
        res.status(200).json({success:true, Message:"Member created successfully" ,newMember})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message })
    }
}

const getMember = async (req, res) => {
    try {
        const members = await memberModel.find()
        const sortedMembers = sortByClosestBirthday(members);

        res.status(200).json({success:true, Message:"Members retrieved successfully" ,members: sortedMembers})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updateMember = async (req, res) => {
    try {
        const userId = req.params.id
        const {birthDate} = req.body

        const age = calculateAge(birthDate);

        if (age < 18) {
            return res.status(400).json({ success: false, Message: 'Member must be between 18-120 years old.' });
        }
        const updateuser=await memberModel.findByIdAndUpdate(userId,req.body,{new:true})
        if (!updateuser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
}


const deleteMember = async (req, res) => {
    try {
        const userId=req.params.id
        const deletuser= await memberModel.findByIdAndDelete(userId)
        if (!deletuser) {
        return res.status(404).json({ success: false, message: 'user Not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
     console.log(error)
     res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { createMember, getMember, updateMember, deleteMember }