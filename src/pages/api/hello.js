/* export default function Handler(req, res){
    res.status(200).json({
        name: 'Teste API',
        metodo: req.method
    })
}
 */

//para acessar parâmetros passado pela url no navegador, basta passar http://localhost:3000/api/hello?nome=Josiel&idade=45
// e colocar na rota esse código params: JSON.stringify(req.query) indicao no passo 1
//ese por acaso quiser pegar pela varável: 
//as informações vem no formato String, no caso de idade, para transformar em numero passa o sinal de +
//no passo 2 = idade:+ req.query.idade
export default function Handler(req, res){
    res.status(200).json({
        name: 'Teste API',
        metodo: req.method,
        params: JSON.stringify(req.query),//passo 1,
        nome:req.query.nome,
        idade: +req.query.idade,//passo 2
        idade: req.query.idade
    })
}