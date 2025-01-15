-- CreateEnum
CREATE TYPE "day_of_week" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "schedules" (
    "id" UUID NOT NULL,
    "schedule_plan_id" UUID NOT NULL,
    "day_of_week" "day_of_week" NOT NULL,
    "start_time" INT4 NOT NULL,
    "end_time" INT4 NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_schedule_plan_id_fkey" FOREIGN KEY ("schedule_plan_id") REFERENCES "schedule_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
