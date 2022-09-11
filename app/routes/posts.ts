import { IRouter, Router } from 'express'
import { PostsController } from '../controllers/PostsController'

const postsRouter: IRouter = Router()

postsRouter.get('/', PostsController.getAll)

// postsRouter.post('/', (req, res) => {
// 	tryCreate(req)
// 		.then((result) => res.status(201).json(result))
// 		.catch((error) => res.status(500).json(error))
// })
//
// postsRouter.get('/:id', (req, res) => {
// 	getOne(req)
// 		.then((result) => res.status(200).json(result))
// 		.catch((error) => res.status(500).json(error))
// })

// postsRouter.delete('/:id', (req, res) => {
// 	deleteOne(req)
// 		.then((result) => res.status(200).json(result))
// 		.catch((error) => res.status(500).json(error))
// })
//
// postsRouter.patch('/:id', (req, res) => {
// 	patchOne(req)
// 		.then((result) => res.status(200).json(result))
// 		.catch((error) => res.status(500).json(error))
// })

// router.all('/', (_, res) => res.status(403).end())


export default postsRouter