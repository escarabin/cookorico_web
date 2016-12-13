Hello {{ $user->firstName }},
<br />
<br />
De nouvelles opportunités s'offrent à vous, cookorico.com vous invite à prendre connaissance d'une ou de plusieurs offres(s) en adéquation à vos critères de recherche :
<br />
<br />
<ul>
@foreach ($jobs as $job)
    <li>
        <b>
            {{ $job->title }} -
            @if($job->contractType)
                {{ $job->contractType->title }}
            @endif
            - {{ $job->week_work_hours }}
        </b>
        <br />
        @if($job->business->place)
            {{ $job->business->place->postalCode }} {{ $job->business->place->city }}
        @endif
        - <a href="{{ env('APP_ROOT_URL') }}/recherche/annonce/{{ $job->id }}">Voir le détail de l'offre</a>
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