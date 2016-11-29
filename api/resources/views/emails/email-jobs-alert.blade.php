Hello {{ $user->firstName }},
<br />
<br />
De nouvelles opportunités s'offrent à vous, cookorico.com vous invite à prendre connaissance d'une ou de plusieurs offres(s) en adéquation à vos critères de recherche :
<br />
<br />
<ul>
@foreach ($jobsList as $job)
    <li>
        <b>{{ $job->title }} - {{ $job->contract_type->title }} - {{ $job->week_work_hours }}</b><br />
        {{ $job->business->place->postalCode }} {{ $job->business->place->city }} - <a href="{{ env('APP_ROOT_URL') }}/recherche/annonce{{ $job->id }}">Voir le détail de l'offre</a>
    </li>
@endforeach
</ul>
<br />
<br />
Accédez à toutes nos offres d'emploi sur  <a href="{{ env('APP_ROOT_URL') }}/recherche">cookorico.com</a>.<br />
1 er Réseau d'emploi Hôtellerie Restauration de l'Ouest
<br />
<br />
Déjà + de 1200 Offres Pourvues, faites vous recruter, renseignez votre profil CANDIDAT
