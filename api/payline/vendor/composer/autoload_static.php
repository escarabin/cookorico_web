<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3a801cb79ebb776c0f4096a3d5ed23d1
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Log\\' => 8,
            'Payline\\' => 8,
        ),
        'M' => 
        array (
            'Monolog\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Payline\\' => 
        array (
            0 => __DIR__ . '/..' . '/monext/payline-sdk/src/Payline',
        ),
        'Monolog\\' => 
        array (
            0 => __DIR__ . '/..' . '/monolog/monolog/src/Monolog',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'Payline\\' => 
            array (
                0 => __DIR__ . '/..' . '/monext/payline-sdk/src/Payline',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3a801cb79ebb776c0f4096a3d5ed23d1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3a801cb79ebb776c0f4096a3d5ed23d1::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit3a801cb79ebb776c0f4096a3d5ed23d1::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
