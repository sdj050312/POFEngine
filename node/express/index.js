import express from 'express' ;
const app = express();

app.listen(8090);
app.get('/sky/:id', (req, res, next)=>{
    console.log('get'); // 사용자 요청에 의해서 설정을 하는것을 의미합니다. 
    console.log(req.path);
    console.log(req.params.id);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.query.keyword);// 해당하는 데이터를 가공할 수 있습니다. 
    

    // 데이터를 전달하는것 
    res.send('hi');
    res.setHeader('key', 'value');
    res.sendStatus(201).send('created!'); // 메세지도 보낼 수 가 있습니다. 
});


app.get('/', (req, res, next)=>{
    console.log('second');
    
});
// IP 

// Port