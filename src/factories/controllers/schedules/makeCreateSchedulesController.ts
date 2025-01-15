import { CreateSchedulesController } from '../../../app/modules/schedules/controllers/create-schedules/CreateSchedules.controller';
import { makeCreateSchedulesService } from '../../services/schedules/makeCreateSchedulesService';

export function makeCreateSchedulesController() {
  const createSchedulesService = makeCreateSchedulesService();

  return new CreateSchedulesController(createSchedulesService);
}
