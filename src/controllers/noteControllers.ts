import { Model, Document } from "mongoose";
import { Request, Response } from "express"; 

const Note: Model<Document> = require('../models/model');

//GET homePage
const noteIndex = (req: Request, res: Response): void => {
    Note.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render("notes/index", { title: 'All Notes', notes: result  });
        })
        .catch((err) => {
            console.log(err);
        })
}

//GET detailsPage
const noteDetails = (req: Request, res: Response): void => {
    const id = req.params.id;
    Note.findById(id)
        .then((result) => {
            res.render('notes/details',{ blog: result, title: 'Note Details' })
        })
}

//GET createpage
const noteCreate = (req:Request, res:Response):void => {
    res.render('notes/create', { title: 'Create an new note' });
}

//POST createPage
const noteCreatePost = (req: Request, res: Response):void => {
    const note = new Note(req.body);
    note.save()
        .then(() => {
            res.redirect('/notes');
        })
        .catch((err) => {
            console.log(err);
        })
}

//DELETE note
const noteDelete= (req:Request, res:Response):void => {
    const id = req.params.id;

    Note.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/notes'})
        })
        .catch(err => {
            console.log(err);
        })
}

export default{
    noteIndex,
    noteDetails,
    noteCreate,
    noteCreatePost,
    noteDelete,
}