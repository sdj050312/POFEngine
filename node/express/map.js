import express from 'express'; // 서버를 요청하고 응답하는것을 의미합니다.  
const app = express();

app.listen(8070); // 서버 포트번호임 

app.get('/sky/:id', (req, res, next)=>{
    console.log('get');
    console.log(req.path);
    console.log(req.params.id); 
    console.log(req.headers);
    console.log(req.query);
    console.log(req.query.keyword);
    // 값을 요청할 쿼리, 키워드, 파람 id, 경로, 헤더들 

    res.send('hi');
    res.setHeader('key', 'value');
    res.sendStatus(201).send('created');
    // 값을 응답하는것을 의미합니다. 


});

app.get('/', (req, res, next)=>{
    console.log('second');
})