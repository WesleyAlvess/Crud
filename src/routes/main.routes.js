const express = require('express')
const router = express.Router()
const Note = require('../models/note')


// Rotas

// RECUPERAR TODOS OS REGISTROS
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find({})
        res.json({ error: false, notes })

    } catch (error) {
        res.status(500).json({ error: true, message: error.message })
    }
})

// RECUPERAR APENAS UM REGISTRO
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        res.json({ error: false, note })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
})

// CRIAR UM REGISTRO
router.post('/', async (req, res) => {
    try {
        const note = req.body
        const response = await new Note(note).save()
        res.json(response)
    } catch (error) {
        res.status(404).json({ error: true, message: error.message })

    }
});

// ATUALIZAR UM REGISTRO
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const novaNota = req.body

        const notaAtualizada = await Note.findByIdAndUpdate(id, novaNota)
        res.json({ erro: false, notaAtualizada })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }
})

// DELETAR APENAS UM REGISTRO
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        deleted = await Note.findByIdAndDelete(id)
        res.json({ error: false })

    } catch (error) {
        res.status(404).json({ error: true, message: error.message })
    }

})


module.exports = router