import { CreateSchedulesService } from '../../../app/modules/schedules/services/create-schedules/CreateSchedules.service';
import { makeSchedulesRepository } from '../../repositories/makeSchedulesRepository';

export function makeCreateSchedulesService() {
  const schedulesRepository = makeSchedulesRepository();

  return new CreateSchedulesService(schedulesRepository);
}
