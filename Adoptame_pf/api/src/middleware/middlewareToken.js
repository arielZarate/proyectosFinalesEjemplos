const axios = require('axios');
const authConfig  = require('../auth_config.json');

const middlewareToken = async (req, res, next) => { 

  try{
        console.log('aca tomo el token ')
        const accessToken = req.headers.authorization.split(" ")[1];
      console.log(accessToken)
        const response = await axios(`https://${authConfig.domain}/userinfo`, {
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        })  

        console.log('Datos del middleware: \n', response.data)
  
      }catch(error) {
         res.send(error.message);
       }
      
       next();
    }

    module.exports = middlewareToken;