import user from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const response = await user.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        }
    }

    export const getUsersById = async (req, res) => {
    try {
        const response = await user.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        }
    }

       export const createUser = async (req, res) => {
    try {
        await user.create(req.body);
        res.status(201).json({msg: "User Telah Ditambahkan"});
    } catch (error) {
        console.log(error.message);
        }
    }

         export const updateUser = async (req, res) => {
    try {
        await user.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Telah Diubah"});
    } catch (error) {
        console.log(error.message);
        }
    } 

          export const deleteUser = async (req, res) => {
    try {
        await user.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Telah Dihapus"});
    } catch (error) {
        console.log(error.message);
        }
    }