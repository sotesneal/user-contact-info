<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use phpDocumentor\Reflection\Types\This;

class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'email' => $this->faker->companyEmail,
            'phone' => $this->faker->phoneNumber,
            'deliveryAddress' => $this->faker->streetAddress,
            'billingAddress' => $this->faker->address
        ];
    }
}