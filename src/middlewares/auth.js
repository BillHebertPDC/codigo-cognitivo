import jwt from 'jsonwebtoken';
let safe_routes = ["/postagem/codigo","/postagem/conteudo"]
let safe_routes_get = ["/postagem/codigo"]
export async function Auth(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (process.env.DEV == "true")
        console.log(req.path, req.method)
    if (!token) {
        if (safe_routes.includes(req.path))
            return next()
        if (req.method == "GET")
            return next()
        return res.redirect("/")
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        return;
    } catch (err) {
        if (safe_routes.includes(req.path))
            return next()
        return res.redirect("/")
    }
}
