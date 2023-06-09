import { Router } from "express"
import userRoutes from './user.routes.js'
import postRoutes from './post.routes.js'

const router = Router()

router.use("/users", userRoutes)
router.use("/post", postRoutes)

export default router