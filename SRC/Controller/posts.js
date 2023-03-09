const PostsModel = require('../Models/posts')

async function get(req, res){

  const {id} = req.params

  const obj = id? {_id: id } : null

  const posts = await PostsModel.find(obj)
  
  //console.log(posts)
  res.send(posts)
  
    
    
}

async function post(req, res){
    const   {
      title,
      description,
      text,
    } = req.body

    const posts = new PostsModel({
      title,
      description,
      text
    })

    posts.save()

    res.send({
      message: 'sucess'
    })
}

async function put(req, res ){
  const {id} = req.params
  //console.log(id)

  const posts = await PostsModel.findOneAndUpdate({ _id: id}, req.body ,{new : true})

  res.send({
    message: 'sucess',
    posts,
  })
}

 
async function remove(req, res){
  const {id} = req.params

  const remove = await PostsModel.deleteOne({ _id: id })

 const message = remove.deletedCount ? 'sucess' : 'error'

 res.send({
  message
 })

} 

module.exports = {
    get,
    post,
    put,
    remove 
}