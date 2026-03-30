const jwt = require('jsonwebtoken')

const authenticationToken = (request, response, next) => {
    let jwtToken
    const authHeader = request.headers['authorization']

    if (authHeader !== undefined) {
        jwtToken = authHeader.split(' ')[1]
    }

    if (jwtToken === undefined) {
        return response.status(401).json({message: 'Authentication Error'})
    }

    
    jwt.verify(jwtToken, process.env.JWT_SECRET, (error, payload) => {
        if (error) {
            return response.status(401).json({message: 'Invalid JWT token'})
        } else {
            request.user = payload
            next()
        }
    })
    
}

module.exports = authenticationToken