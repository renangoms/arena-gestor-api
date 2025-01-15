import type { ISchedulesRepository } from '../../../../database/repositories/schedules/SchedulesRepository.types';
import type { Schedule } from '../../../../entities/Schedule';
import type {
  ICreateSchedulesInputType,
  ICreateSchedulesService,
} from './CreateSchedulesService.types';

export class CreateSchedulesService implements ICreateSchedulesService {
  constructor(private readonly schedulesRepository: ISchedulesRepository) {}

  execute(input: ICreateSchedulesInputType): Promise<Schedule[]> {
    return this.schedulesRepository.create(input);
  }
}
