import express from 'express';
import dashboardRoutes from './dashboard-routes';
import homeRoutes from './home-routes';
import loginRoutes from './login-routes';
const router = express.Router();

router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

export default router;
