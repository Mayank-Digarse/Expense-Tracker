import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./utils/schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Expense-Tracker_owner:Ze0rC2DdjKBf@ep-orange-tree-a12h39a4.ap-southeast-1.aws.neon.tech/Expense-Tracker?sslmode=require',
  },
});
