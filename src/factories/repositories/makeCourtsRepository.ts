import { CourtsRepository } from '../../app/database/repositories/courts/CourtsRepository';

export function makeCourtsRepository() {
  return new CourtsRepository();
}
