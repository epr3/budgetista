DO $$ BEGIN
 CREATE TYPE "transaction_type" AS ENUM('EXPENSE', 'INCOME');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "type" "transaction_type" NOT NULL;