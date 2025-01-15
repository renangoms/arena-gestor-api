import { SchedulesRepository } from '../../app/database/repositories/schedules/SchedulesRepository';

export function makeSchedulesRepository() {
  return new SchedulesRepository();
}
