Bonjour {{ $user->civility->title }} {{ $user->lastName }},<br /><br />
Vous avez une nouvelle candidature pour votre annonce <a href="{{ env('APP_ROOT_URL') }}/#/recherche/annonce/{{ $job->id }}">« {{ $job->title }} »</a><br />
Vous trouverez en pièce jointe le CV du postulant.<br />
Si cette offre est déjà pourvue, gérez-la directement depuis votre <a href="{{ env('APP_ROOT_URL') }}/#/profil/">espace recruteur</a><br />
Cordialement,<br />
<br />
La Brigade Cookorico<br />
hello@cookorico.com<br />