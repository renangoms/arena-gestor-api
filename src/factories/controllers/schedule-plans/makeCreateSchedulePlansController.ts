import { CreateSchedulePlanController } from '../../../app/modules/schedule-plans/controllers/create-schedule-plan/CreateCourt.controller';
import { makeCreateSchedulePlansService } from '../../services/schedule-plans/makeCreateSchedulePlansService';

export function makeCreateSchedulePlansController() {
  const createSchedulePlansService = makeCreateSchedulePlansService();

  return new CreateSchedulePlanController(createSchedulePlansService);
}
