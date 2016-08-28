<?php

/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/3/2016
 * Time: 7:20 PM
 */
namespace SIT\PlatformBundle\Controller;
use SIT\PlatformBundle\Entity\Note;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction(){
        if ($this->isGranted('ROLE_BUSINESS_DEVELOPER')) {
            $listSociete=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->findAll();
            $listeNote=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Note')->findall();
        }
        else{
            $usr= $this->getUser();
            $note=new Note();
            $listeNote[]=$note;
            $listSociete=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->findByCommercialGerant($usr);
            foreach($listSociete as $societe)
            {
                foreach($societe->getSocietenotes() as $notes){
                    $listeNote[]=$notes;
                }
            }
        }
        return $this->render('SITPlatformBundle:commercial:index.html.twig',array('listSociete' => $listSociete,'listNote'=>$listeNote));
}

}
