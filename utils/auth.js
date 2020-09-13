function authUser(req, res, next) {
    if (req.user == null) {
        res.status(403)
        return res.send('You need to sign in')
    }
    next()
}

function authRole(user_role) {
    return (req, res, next) => {
        if (req.user.user_role !== user_role) {
            res.status(401)
            return res.send('Not allowed')
        }

        next()
    }
}





module.exports = {
    authUser, authRole
}