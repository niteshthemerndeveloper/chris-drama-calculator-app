const config = require('config');

const setDevAndProdVars = () => {
  let configVars = {};

  if (process.env.NODE_ENV === 'production') {
    // Set Config Vars in Production
    configVars.mongoDBURISecretKey = process.env.mongoDBURISecretKey;
  } else {
    // Set Config Vars in Development
    configVars.mongoDBURISecretKey = config.get('mongoDBURISecretKey');
  }

  return configVars;
};

// setDevAndProdVars();

module.exports = setDevAndProdVars;
