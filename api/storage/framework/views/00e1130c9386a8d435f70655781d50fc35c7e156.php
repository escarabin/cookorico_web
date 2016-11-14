Hello <?php echo e($user->firstName); ?>,<br />
Votre candidature pour le poste de <?php echo e($job->title); ?> n'a pas été retenue par l’établissement <?php echo e($job->business->title); ?>.<br />
Tenter à nouveau votre chance sur : <a href="<?php echo e(env('APP_ROOT_URL')); ?>/#/recherche"><?php echo e(env('APP_ROOT_URL')); ?></a>