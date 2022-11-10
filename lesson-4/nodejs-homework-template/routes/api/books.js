const express = require('express');
const Joi = require("joi");

const router = express.Router();

const { createError } = require("../../helpers");

const books = require("../../models/books");

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error);
        // res.status(500).json({
        //     message: "Server error"
        // })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await books.getById(id);
        
        if (!result) {
            console.log(result);
            throw createError(404, "Not found");
            // res.status(404).json({
            //     message: "Not found"
            // });
            // return;   
        }

        res.json(result);
    } catch (error) {
        // res.status(500).json({
        //     message: "Server error"
        // })
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { error } = bookSchema.validate(req.body);

        if (error) {
            throw createError(400, error.message);
        }

        const result = await books.addBook(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { error } = bookSchema.validate(req.body);

        if (error) {
            throw createError(400, error.message);
        }

        const { id } = req.params;
        const result = await books.updateById(id, req.body);

        if (!result) {
            throw createError(404, "Not found");
        }

        res.json(result);

    } catch (error) {
        next(error);
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await books.removeById(id);
        if (!result) {
            throw createError(404, "Not found");
        }

        res.json({
            message: "Book deleted"
        })
    } catch (error) {
        next(error);
    }
})


module.exports = router;