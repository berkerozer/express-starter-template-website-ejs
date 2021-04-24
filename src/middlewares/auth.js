const auth = async (req,res,next) => {
  console.log('auth');
  next();
}

module.exports = auth;