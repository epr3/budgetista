import { db, schema } from "$lib";
import { eq, sql } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  // Server API:

  const transactions = await db.query.transactions.findMany({
    where: eq(schema.transactions.userId, locals.session.data.id),
    columns: {
      userId: false,
    },
    orderBy: (transactions, { desc }) => [desc(transactions.createdAt)],
  });

  const count = await db
    .select({ count: sql<number>`count(id)` })
    .from(schema.transactions)
    .where(eq(schema.transactions.userId, locals.session.data.id));

  return { transactions, total: count[0].count };
};
