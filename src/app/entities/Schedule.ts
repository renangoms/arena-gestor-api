import type { DayOfWeek as PrismaDayOfWeek } from '@prisma/client';

export type DayOfWeek = PrismaDayOfWeek;

export interface Schedule {
  id: string;
  schedulePlanId: string;
  dayOfWeek: DayOfWeek;
  startTime: number;
  endTime: number;
  createdAt: Date;
  updatedAt: Date;
}
