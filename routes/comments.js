const Express = require("express");
const router = Express.Router();
const Comment = require('../models/Comment');


//function to retrive data
router.get('/', async (req, res) => {

  //  return res.json({})
    
   try{
        const comments = await  Comment.find();
      return  res.json(comments);
    }
    catch(err){
       return  res.json({message : err});
    }
});


// function to push data
router.post('/', async (req, res) =>  {

    const comment = new Comment({
        message: req.body.message
    });

    console.log('hello')

    return comment.save()
        .then(data => {
            console.log("Success")
            return res.json(data);
        })
        .catch(err => {
            console.error(err)
            return res.json({ message: err });
        });
    // console.log(req.body);

});

//GET specific comment
router .get('/:commentId' , async(req , res) =>{
    try{
        const comment = await Comment.findById(req.params.commentId);

        res.json(comment);
    }
    catch(err){
        res.json({message : err});
    }
});

//UPDATING replies
router .patch('/:commentId' , async(req , res) =>{
    console.log(req.params.commentId);
try{
console.log(req.body.replies);
// only this part contains some problem
const update = await Comment.update(
{_id: req.params.commentId },
{$push:  {replies: req.body.reply }} );
res.json(update);
// there is something wrong with these lines only
}

catch(err){
    console.log(err);
    res.json({message : err});
}
});

module.exports = router;