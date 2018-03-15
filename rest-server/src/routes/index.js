import express from ('express');

import authRouter from '../components/auth/authRouter';
import userRouter from '../components/users/userRouter';

const router = express.Router;

router.use('/auth', authRouter);
router.use('/auth', userRouter);

export default router;