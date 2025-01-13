import { CreateCourtController } from '../../../app/modules/courts/controllers/create/CreateCourt.controller';
import { makeCreateCourtService } from '../../services/courts/makeCreateCourtService';

export function makeCreateCourtController() {
  const createCourtService = makeCreateCourtService();

  return new CreateCourtController(createCourtService);
}
