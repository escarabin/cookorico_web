Hello <?php echo e($user->firstName); ?>,<br />
Votre candidature pour l’annonce -  « <?php echo e($job->title); ?> » a bien été envoyée à l’établissement (<?php echo e($job->business->title); ?>).<br />
Pour visualiser et gérer l’ensemble de vos candidatures, rendez-vous sur votre <a href="<?php echo e(env('APP_ROOT_URL')); ?>/#/profil/candidatures">espace candidat</a><br />