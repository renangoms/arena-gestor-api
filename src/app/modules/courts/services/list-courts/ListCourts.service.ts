import type { ICourtsRepository } from '../../../../database/repositories/courts/CourtsRepository.types';
import type {
  IListCourtsOutputType,
  IListCourtsService,
} from './ListCourtsService.types';

export class ListCourtsService implements IListCourtsService {
  constructor(private readonly courtsRepository: ICourtsRepository) {}

  execute(): Promise<IListCourtsOutputType> {
    return this.courtsRepository.listAll();
  }
}
