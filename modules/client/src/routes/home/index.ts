import { Response, Request } from "express"

const handler = (req:Request, res:Response) => {
  res.render('home', { contentToRender: 'Content from src/routes' })
}

export default handler