export default function handler(req, res){
   const codigo = req.query.codigo2 
    res.status(200).json({
        Id: codigo,
        nome: `Maria ${codigo}`,
        email: `josiel@gmail.com${codigo}`
    })
}

//enviando dados para api