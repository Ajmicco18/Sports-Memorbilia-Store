<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;
use OpenApi\Attributes as OAT;

#[OAT\Schema(
    schema: 'ProductResource',
    properties: [
        new OAT\Property(property: 'id', type: 'integer', example: 1),
        new OAT\Property(property: 'price', type: 'float', example: 49.99),
        new OAT\Property(property: 'category', type: 'string', example: 'Apparel'),
        new OAT\Property(property: 'product_image', type: 'string', example: '../../assets/images/warriors.png'),
        new OAT\Property(property: 'size', type: 'string', example: 'xl'),
        new OAT\Property(property: 'description', type: 'string', example: 'Nike Golden State Warriors Hoodie'),
    ]
)]

#[OAT\Schema(
    schema: 'ProductResourceCollection',
    type: 'array',
    items: new OAT\Items(ref: '#/components/schemas/ProductResource')
)]

class ProductResource extends JsonResource
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
            'price' => $this->price,
            'category' => $this->category,
            'product_image' => $this->product_image,
            'size' => $this->size,
            'description' => $this->description,
        ];
    }
}
