const express = require('express')
const router = express.Router()

const DepartamentoController = require('../controllers/DepartamentoController')

const { validarDepartamento} = require('../validators/DepartamentoValidator')
const { validarId } = require ('../validators/idValidator')

// Departamento
router.get('/departamento', DepartamentoController.buscarTodos)
router.get('/departamento/:id',validarID, DepartamentoController.buscarPorID)
router.post('/departamento',validarID, validarDepartamento, DepartamentoController.criar)
router.put('/departamento/:id',validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamento/:id',validarID, DepartamentoController.excluir)

module.exports = router