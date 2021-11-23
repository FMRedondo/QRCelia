<link rel="shortcut icon" type="image/jpg" href="favicons/favicon.ico"/>
<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <img src="/img/escudoCelia.png" alt="logo Celia" class='logoLogin'>
        </x-slot>

        <div class="mb-4 text-sm text-black-600">
            {{ __('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.') }}
        </div>

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <x-jet-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <div class="block">
                <x-jet-label for="email" value="{{ __('Email') }}" />
                <x-jet-input placeholder='email@dominio.com' id="email" class="block mt-1 w-full inputLogin" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <div class="flex items-center justify-end mt-4 centrarBotones">
                <x-jet-button class="botonIniciar">
                    {{ __('Email Password Reset Link') }}
                </x-jet-button>
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
<div class="imagenFondo"></div>

<link rel="stylesheet" href="estilos/login/loginYregistro.css">