module.exports = function(req,res,next){
    res._header('Acess-Control-Allow-Origin','*')
    res._header('Acess-Control-Allow-Origin','GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res._header('Acess-Control-Allow-Origin','Origin, X-Request-With, Content-Type, Accept')
    next()
}