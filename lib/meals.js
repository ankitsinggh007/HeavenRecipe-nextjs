import fs from 'node:fs';
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });

  return db.prepare(`SELECT * FROM meals`).all();
}
export function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug=?`).get(slug);
}

export async function saveMeal(meal) {
  console.log(meal,"point 1");
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  console.log(meal,"point 2")

  const extension=meal.image.name.split(".")[1];
  console.log(meal,"point 3")

  const filename=`${meal.slug}.${extension}`;
  console.log(meal,"point 5")

  const stream=fs.createWriteStream(`public/images/${filename}`);
  console.log(meal,"point 6")

  const bufferedImage=await meal.image.arrayBuffer();
  console.log(meal,"point 7")

  stream.write(Buffer.from(bufferedImage),(error)=>{
    if(error){
      throw new Error('Saving image failed!');
    }
  });

  meal.image=`/images/${filename}`;

  db.prepare(`INSERT INTO meals 
    (title,summary,instructions,creator,creator_email,image,slug) VALUES(

    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
    
    ) `).run(meal);

}
