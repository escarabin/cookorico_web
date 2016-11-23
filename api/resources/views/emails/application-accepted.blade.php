Hello {{ $user->firstName }},<br />
Votre candidature intéresse l’établissement {{ $job->business->title }} pour le poste de {{ $job->title }} !<br />
Prenez dès a présent contact avec l’établissement<br />
Voici le lien vers l'annonce : <a href="{{ env('APP_ROOT_URL') }}/#/recherche/annonce/{{ $job->id }}">{{ env('APP_ROOT_URL') }}/#/recherche/annonce/{{ $job->id }}</a><br />
Tout la Brigade Cookorico vous félicite pour cette opportunité <br />