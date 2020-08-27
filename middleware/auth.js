const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (request, response, next) => {

    const token = request.header('auth-token');

    if (!token) {
        return response.json({
            message: 'No token. Authorization denied.'
        });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtToken'));
        request.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
        response.json({
            message: 'Token is not valid.'
        })
    }
}