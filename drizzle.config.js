/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://inverradb_owner:zcDgwC07eafm@ep-rough-violet-a53nf65z.us-east-2.aws.neon.tech/inverradb?sslmode=require ',
    }
  };