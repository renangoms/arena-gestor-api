import { ListSchedulePlansController } from '../../../app/modules/schedule-plans/controllers/list-schedule-plans/ListSchedulePlans.controller';
import { makeListSchedulePlansService } from '../../services/schedule-plans/makeListSchedulePlansService';

export function makeListSchedulePlansController() {
  const listSchedulePlansService = makeListSchedulePlansService();

  return new ListSchedulePlansController(listSchedulePlansService);
}
