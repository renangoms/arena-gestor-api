import { ListSchedulesController } from '../../../app/modules/schedules/controllers/list-schedules/ListSchedules.controller';
import { makeListSchedulesService } from '../../services/schedules/makeListSchedulesService';

export function makeListSchedulesController() {
  const listSchedulesService = makeListSchedulesService();

  return new ListSchedulesController(listSchedulesService);
}
