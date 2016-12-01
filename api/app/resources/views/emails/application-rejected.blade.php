Hello {{ $user->firstName }},<br />
Votre candidature pour le poste de {{ $job->title }} n'a pas été retenue par l’établissement {{ $job->business->title }}.<br />
Tenter à nouveau votre chance sur : <a href="{{ env('APP_ROOT_URL') }}/#/recherche">{{ env('APP_ROOT_URL') }}</a>