Hello {{ $user->firstName }},<br />
Votre candidature pour l’annonce -  « {{ $job->title }} » a bien été envoyée à l’établissement ({{ $job->business->title }}).<br />
Pour visualiser et gérer l’ensemble de vos candidatures, rendez-vous sur votre <a href="{{ env('APP_ROOT_URL') }}/#/profil/candidatures">espace candidat</a><br />