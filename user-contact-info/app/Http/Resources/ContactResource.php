<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'phone' => $this->phone,
            'deliverAddress' => $this->deliveryAddress,
            'billingAddress' => $this->billingAddress
        ];
    }
    public function with($request)
    {
        return [
            'version' => '1.0.0',
            'author_url' => url('https://usercontactapi.test')
        ];
    }
}