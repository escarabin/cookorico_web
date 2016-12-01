Bonjour {{ $user->civility->title }} {{ $user->lastName }},<br /><br />
Votre annonce « {{ $job->title }} » vient d’être validée pour être mise en ligne sur <a href="{{ env('APP_ROOT_URL') }}">cookorico.com</a>.<br />
Elle sera multi diffusée sous 48h chez nos différents partenaires et sera en ligne pour une durée de 30 jours maximum.<br />
Vous pouvez consulter immédiatement les CV correspondants à votre annonce (lien vers profil correspondant)<br />
À tout moment, vous pouvez gérer l’ensemble de vos annonces en ligne sur votre espace recruteur à l’adresse suivante : <a href="{{ env('APP_ROOT_URL') }}/#/profil/annonces">gérer mes annonces</a>.<br />
Merci pour votre confiance et à très bientôt sur Cookorico,<br /><br />
La Brigade Cookorico<br />
hello@cookorico.com