import { ListSchedulesService } from '../../../app/modules/schedules/services/list-schedules/ListSchedules.service';
import { makeSchedulesRepository } from '../../repositories/makeSchedulesRepository';

export function makeListSchedulesService() {
  const schedulesRepository = makeSchedulesRepository();

  return new ListSchedulesService(schedulesRepository);
}
