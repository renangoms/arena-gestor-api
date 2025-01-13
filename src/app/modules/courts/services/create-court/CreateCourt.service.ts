import type { ICourtsRepository } from '../../../../database/repositories/courts/CourtsRepository.types';
import type {
  ICreateCourtInputType,
  ICreateCourtOutputType,
  ICreateCourtService,
} from './CreateCourtService.types';

export class CreateCourtService implements ICreateCourtService {
  constructor(private readonly courtsRepository: ICourtsRepository) {}

  async execute(input: ICreateCourtInputType): Promise<ICreateCourtOutputType> {
    return await this.courtsRepository.create(input.name);
  }
}
