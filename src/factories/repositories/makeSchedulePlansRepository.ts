import { SchedulePlansRepository } from '../../app/database/repositories/schedule-plans/SchedulePlansRepository';

export function makeSchedulePlansRepository() {
  return new SchedulePlansRepository();
}
