import { Response, Request } from "express"
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Component from './Component'

const handler = (req:Request, res:Response) => {
  res.render('home', { reactContent: ReactDOMServer.renderToString(<Component />) })
}

export default handler