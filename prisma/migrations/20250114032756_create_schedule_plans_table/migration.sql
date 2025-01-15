-- CreateTable
CREATE TABLE "schedule_plans" (
    "id" UUID NOT NULL,
    "name" STRING NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT FALSE,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedule_plans_pkey" PRIMARY KEY ("id")
);
