import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

//intializaing packages 
const app =express();

// setings
app.set('port', process.env.PORT || 3000);

// middleweares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
app.get('/', (req, res)=> {res.send('Hello Word')});

app.get('/api', (req, res) => {res.json({api:'Works!'})});

// start the server
app.listen(app.get('port'), ()=> {console.log('server on port', app.get('port'));})

