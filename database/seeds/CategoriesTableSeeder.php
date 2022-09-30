<?php

use App\Models\Category;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $categories = [
            'Cinema',
            'Letteratura',
            'Fumetto',
            'Videogames',
            'SerieTV',
            'Marketing',
            'Psicologia',
            'Cose',
            'Robe',
        ];

        foreach ($categories as $category) {
            $newCategory = new Category();
            $newCategory->name = $category;
            $newCategory->color = $faker->hexColor();
            $newCategory->save();
        }
    }
}
