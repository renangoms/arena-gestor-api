import type { ISchedulesRepository } from '../../../../database/repositories/schedules/SchedulesRepository.types';
import type { Schedule } from '../../../../entities/Schedule';
import type {
  IListSchedulesInputType,
  IListSchedulesService,
} from './ListSchedulesService.types';

export class ListSchedulesService implements IListSchedulesService {
  constructor(private readonly schedulesRepository: ISchedulesRepository) {}

  execute(input: IListSchedulesInputType): Promise<Schedule[]> {
    return this.schedulesRepository.findByPlan(input);
  }
}
