<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use OpenApi\Attributes as OAT;

#[OAT\Schema(
    schema: 'SignupRequest',
    required: ['first_name', 'last_name', 'email', 'phone', 'text_alerts', 'email_alerts', 'password'],
    properties: [
        new OAT\Property(
            property: 'first_name',
            type: 'string',
            example: 'John'
        ),
        new OAT\Property(
            property: 'last_name',
            type: 'string',
            example: 'Doe'
        ),
        new OAT\Property(
            property: 'email',
            type: 'string',
            format: 'email',
            example: 'john@example.com'
        ),
        new OAT\Property(
            property: 'phone',
            type: 'string',
            example: '123-456-7890'
        ),
        new OAT\Property(
            property: 'text_alerts',
            type: 'boolean',
            example: true
        ),
        new OAT\Property(
            property: 'email_alerts',
            type: 'boolean',
            example: true
        ),
        new OAT\Property(
            property: 'password',
            type: 'string',
            example: '123456'
        ),
    ]
)]
class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [

            'first_name' => [
                'required',
                'string',
            ],
            'last_name' => [
                'required',
                'string',
            ],
            'email' => [
                'required',
                'email',
                'unique:App\Models\User,email',
            ],
            'phone' => [
                'required',
                'string',
            ],
            'text_alerts' => [
                'required',
                'boolean',
            ],
            'email_alerts' => [
                'required',
                'boolean',
            ],
            'password' => [
                'required',
                'min:6',
                'string',
            ],
        ];
    }
}
