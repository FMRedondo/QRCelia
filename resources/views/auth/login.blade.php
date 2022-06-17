<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
<link rel="icon" type="image/x-icon" href="/img/favicon.ico">
<link rel="stylesheet" href="estilos/login/loginYregistro.css">
<title>QRCelia | Login</title>
<x-guest-layout class='flex items-center'>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <img src="img/escudoCelia.png" alt="logo Celia" class='logoLogin'>
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
        @csrf

            <div>
                <x-jet-input id="email" class="block mt-1 w-full inputLogin" type="email" name="email" :value="old('email')" placeholder='Introduce tu email' required />
            </div>

            <div class="mt-4">
                <x-jet-input id="password" class="block mt-1 w-full inputLogin" type="password" name="password" placeholder='Introduce tu contraseña' required autocomplete="current-password" />
            </div>

            <div class="block mt-4 centrarBotones">
                <label for="remember_me" class="flex items-center">
                    <x-jet-checkbox id="remember_me" name="remember" />
                    <span class="ml-2 text-sm">{{ __('Recuérdame') }}</span>
                </label>
                @if (Route::has('password.request'))
                    <a class="underline text-sm" href="{{ route('password.request') }}">
                        {{ __('¿Olvidó la contraseña?') }}
                    </a>
                @endif
            </div>

            <div class="flex items-center justify-end mt-4">
            

                <x-jet-button class="ml-4 botonIniciar">
                    {{ __('Iniciar sesión') }}
                </x-jet-button>
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
<div class="imagenFondo"></div>
