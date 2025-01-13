import { CourtsRepository } from '../../../app/database/repositories/courts/CourtsRepository';
import { ListCourtsService } from '../../../app/modules/courts/services/list-courts/ListCourts.service';

export function makeListCourtsService() {
  const courtsRepository = new CourtsRepository();

  return new ListCourtsService(courtsRepository);
}
