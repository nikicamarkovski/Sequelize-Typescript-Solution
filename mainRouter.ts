import * as express from 'express';
import postRoutes from './post/routes'
import categoryRoutes from './category/routes'
import userRoutes from './user/routes';
 let router = express.Router();

router.use(postRoutes);
router.use(categoryRoutes);
router.use(userRoutes)
export default router;
