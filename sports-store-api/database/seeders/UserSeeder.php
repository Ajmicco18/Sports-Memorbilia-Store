<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'john@example.com',
            'phone' => '123-456-7890',
            'text_alerts' => true,
            'email_alerts' => false,
            'password' => Hash::make('12345678'),
        ]);
    }
}
