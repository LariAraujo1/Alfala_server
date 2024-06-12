import { getLivro } from '../controller/livroController.js';
import {Router} from 'express'

const router = Router();

//GET - Retornas livros 
router.get('/', getLivro)

//POST - Criar um livro 
router.post('/',(req, res) =>{
res.send('Estou na rota post')
});

//PATCH - Atualizar um livro 
router.patch('/',(req, res) =>{
res.send('Estou na rota patch')
});


//DELETE - Apagar um livro
router.delete('/',(req, res) =>{
res.send('Estou na rota delete')
});

export default router;