
export function initMiddleware(app:any) {
    app.use('/api/v1/blog/*', async (c:any, next:any) => {
        const header = c.req.header("authorization") || "";
        // Bearer token => ["Bearer", "token"];
        const token = header.split(" ")[1]
        
        // @ts-ignore
        const response = await verify(token, c.env.JWT_SECRET)
        if (response.id) {
        next()
        } else {
        c.status(403)
        return c.json({ error: "unauthorized" })
        }
    })
}