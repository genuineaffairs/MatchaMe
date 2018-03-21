import express from 'express';

import {
  fetchStarredMatchesController,
  fetchUnstarredMatchesController,
  starSingleMatchController,
  unstarSingleMatchController
} from './outcomesControllers';

const router = express.Router();

router.route('/fetchStarredMatches/:userId').get(fetchStarredMatchesController);

router
  .route('/fetchUnstarredMatches/:userId')
  .get(fetchUnstarredMatchesController);

router
  .route('/starSingleMatch')
  .put(starSingleMatchController)
  .get(starSingleMatchController);

router
  .route('/unstarSingleMatch')
  .put(unstarSingleMatchController)
  .get(unstarSingleMatchController);

export default router;