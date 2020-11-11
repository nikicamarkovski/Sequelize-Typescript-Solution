import * as express from 'express';
import postRoutes from './post/routes'
import categoryRoutes from './category/routes'
 let router = express.Router();

router.use(postRoutes);
router.use(categoryRoutes);
export default router;
