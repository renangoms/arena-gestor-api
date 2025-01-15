import { ListSchedulePlansService } from '../../../app/modules/schedule-plans/services/list-schedule-plans/ListSchedulePlans.service';
import { makeSchedulePlansRepository } from '../../repositories/makeSchedulePlansRepository';

export function makeListSchedulePlansService() {
  const schedulePlansRepository = makeSchedulePlansRepository();

  return new ListSchedulePlansService(schedulePlansRepository);
}
