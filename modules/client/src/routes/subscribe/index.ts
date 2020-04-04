import { Response, Request } from "express"

const handler = (req:Request, res:Response) => {
  res.render('subscribe', { contentToRender: 'Content from src/routes' })
}

export default handler