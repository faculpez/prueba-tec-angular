import app from './app'

const main = () =>{
    app.listen(app.get('port'));
    console.log(`--- it's alive ${app.get('port')} ---`);
};

main(); 