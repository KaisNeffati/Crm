<?php

/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/6/2016
 * Time: 1:47 PM
 */
namespace SIT\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CoreController extends Controller
{
    public function indexAction(){
        return $this->render("SITCoreBundle:Core:index.html.twig");
    }

}
