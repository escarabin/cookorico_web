Bonjour {{ $user->civility->title }} {{ $user->lastName }},
Il semblerait que vous ayez demandé à réinitialiser votre mot de passe.<br />
Si oui, connectez-vous sur ce lien et suivez la procédure :
<a href="{{ env('APP_ROOT_URL') }}/definir-nouveau-mot-de-passe/{{ $user->id }}">{{ env('APP_ROOT_URL') }}/definir-nouveau-mot-de-passe/{{ $user->id }}</a><br />
La Brigade Cookorico<br />
hello@cookorico.com