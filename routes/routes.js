const router = require('express').Router();
const todo = require('../models/todo');
const Todo = require('../models/todo');



router.get('/',(req,res)=>{
    Todo.find({})
        .then((results)=>{

            let todos = results.filter((todo)=>{
                return !todo.done;
            });

            let doneTodos = results.filter((todo)=>{
                return todo.done;
            });

            res.render('index', {todos: todos, doneTodos: doneTodos});
            console.log(results);
        })
    });


router.post('/todos',(req,res)=>{
 // body parser will put everyting on the form on body req

     let newTodo = new Todo({description: req.body.description});
     newTodo.save()
        .then((result)=>{
            console.log(result);
            res.redirect('/');
        })
        .catch((err)=>{
            console.log(err);
            res.redirect('/');
        })
    });

    router.post('/todos/:id/completed',(req,res)=>{
        let todoId = req.params.id;
    
        Todo.findById(todoId)
        .exec()
        .then(function(result){
            result.done = !result.done;
            return result.save();
        })
        .then(function(result){
            res.redirect('/');
        });

        res.redirect('/');
        console.log(req.params.id + ' todo was completed!');
    })

module.exports = router;