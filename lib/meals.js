import sql from "better-sqlite3";

const db = sql('meals.db');

// run() - when we insert/change data
// all() - when we are fetching data and want to return all rows
// get() - when we look for a single row

export async function getMeals() {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return db.prepare('SELECT * FROM meals').all();
}