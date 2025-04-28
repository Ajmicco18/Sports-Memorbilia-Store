<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;
use OpenApi\Attributes as OAT;

#[OAT\Schema(
    schema: 'UserResource',
    properties: [
        new OAT\Property(property: 'id', type: 'integer', example: 1),
        new OAT\Property(property: 'first_name', type: 'string', example: 'John'),
        new OAT\Property(property: 'last_name', type: 'string', example: 'Doe'),
        new OAT\Property(property: 'email', type: 'string', example: 'john@example.com'),
        new OAT\Property(property: 'phone', type: 'string', example: '123-456-7890'),
        new OAT\Property(property: 'text_alerts', type: 'boolean', example: true),
        new OAT\Property(property: 'email_alerts', type: 'boolean', example: true),
        new OAT\Property(property: 'created_at', type: 'datetime', example: '2022-08-27T16:14:46.000000Z'),
    ]
)]
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request): array|Arrayable|JsonSerializable
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'text_alerts' => $this->text_alerts,
            'email_alerts' => $this->email_alerts,
            'created_at' => $this->created_at,
        ];
    }
}
