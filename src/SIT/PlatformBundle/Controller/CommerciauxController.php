<?php
/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/21/2016
 * Time: 10:24 PM
 */

namespace SIT\PlatformBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CommerciauxController extends Controller
{

    public function afficherCommerciauxAction(){
        $listCommerciaux=$this->getDoctrine()->getManager()->getRepository('SITUserBundle:User')->findAll();
        return $this->render('SITPlatformBundle:commercial:afficherCommerciaux.html.twig',array('listCommerciaux' => $listCommerciaux));
    }
    public function rapportCommercialAction($idcommercial){
        $commercial=$this->getDoctrine()->getManager()->getRepository('SITUserBundle:User')->find($idcommercial);
        $repository = $this->getDoctrine()
            ->getRepository('SITPlatformBundle:EtatProduit');
        $query = $repository->createQueryBuilder('p')
            ->where('p.commercial = :commercial')
            ->setParameter('commercial', $commercial)
            ->groupBy('p.produit')
            ->getQuery();
        $listeEtatProduit = $query->getResult();
        $i=0;
        foreach($listeEtatProduit as $etatproduit){
            $listeProduit[]=$etatproduit->getProduit();
            $listeProduit=array_values($listeProduit);
            $i=1;
        }
        if($i!=0){
            return $this->render('SITPlatformBundle:commercial:rapportCommercial.html.twig',array('listeProduit' => $listeProduit));
        }
        else{
            return $this->render('SITPlatformBundle:commercial:rapportcommercialvide.html.twig');
        }

    }
}
