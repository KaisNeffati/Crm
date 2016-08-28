<?php

namespace SIT\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class SITUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
