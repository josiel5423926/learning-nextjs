export default function clientes(req, res){
   if(req.method === "GET"){
       HandlerGet(req, res)
   }else{
    res.status(405).send()  
   } 
}
//tratando status 405 que essa requisição não suporta
function HandlerGet(req, res){
    res.status(200).json({
        id: 4,
        nome: 'Maria',
        idade: 33
    })
}



