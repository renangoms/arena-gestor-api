import { CourtsRepository } from '../../../app/database/repositories/courts/CourtsRepository';
import { CreateCourtService } from '../../../app/modules/courts/services/create-court/CreateCourt.service';

export function makeCreateCourtService() {
  const courtsRepository = new CourtsRepository();

  return new CreateCourtService(courtsRepository);
}
