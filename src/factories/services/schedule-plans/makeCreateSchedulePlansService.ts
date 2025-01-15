import { CreateSchedulePlanService } from '../../../app/modules/schedule-plans/services/create-schedule-plan/CreateSchedulePlan.service';
import { makeSchedulePlansRepository } from '../../repositories/makeSchedulePlansRepository';

export function makeCreateSchedulePlansService() {
  const schedulePlansRepository = makeSchedulePlansRepository();

  return new CreateSchedulePlanService(schedulePlansRepository);
}
