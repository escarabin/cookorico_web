Bravo {{ $user->firstName }},<br />
L’établissement « {{ $testimonial->business->title }} » vient de vous recommander !<br />
Vous pouvez la visualisez sur votre profil grâce au « pouce » obtenu sur cette expérience.<br />
Un profil recommandé est 7 fois plus vu par les recruteurs : <a href="{{ env('APP_ROOT_URL') }}/profil/recommandations">gérer mes recommandations</a>.