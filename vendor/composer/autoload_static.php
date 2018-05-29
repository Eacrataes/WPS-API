<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd4c3a01c72dad37e36d21ae93c055281
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Automattic\\WooCommerce\\' => 23,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Automattic\\WooCommerce\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/woocommerce/src/WooCommerce',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd4c3a01c72dad37e36d21ae93c055281::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd4c3a01c72dad37e36d21ae93c055281::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
