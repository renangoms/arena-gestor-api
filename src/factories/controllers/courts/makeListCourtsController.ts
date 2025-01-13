import { ListCourtsController } from '../../../app/modules/courts/controllers/list-courts/ListCourts.controller';
import { makeListCourtsService } from '../../services/courts/makeListCourtsService';

export function makeListCourtsController() {
  const listCourtsService = makeListCourtsService();

  return new ListCourtsController(listCourtsService);
}
