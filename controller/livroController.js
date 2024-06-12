import fs from 'fs'
import { getTodosLivros } from '../service/livroService.js';

export const getLivro = (req,res) =>{
    try{
        const livros = getTodosLivros();
        res.send(livros)
    }
    catch(error){
        res.status(500)
        res.status(error.message)
    }
}