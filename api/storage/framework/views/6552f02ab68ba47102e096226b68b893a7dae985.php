<form method="POST" action="/api/public/password/email">
    <?php echo csrf_field(); ?>


    <?php if(count($errors) > 0): ?>
        <ul>
            <?php foreach($errors->all() as $error): ?>
                <li><?php echo e($error); ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>

    <div>
        Email
        <input type="email" name="email" value="<?php echo e(old('email')); ?>">
    </div>

    <div>
        <button type="submit">
            Send Password Reset Link
        </button>
    </div>
</form>