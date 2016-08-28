<?php
/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/23/2016
 * Time: 11:43 PM
 */

namespace SIT\PlatformBundle\Controller;


use SIT\PlatformBundle\Entity\EtatProduit;
use SIT\PlatformBundle\Form\EtatProduitType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class EtatProduitController extends Controller
{

    public function ajouterEtatProduitAction(Request $request,$id,$idproduit){
        $etatProduit=new EtatProduit();
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $produit=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Produit')->find($idproduit);
        $etatProduit->setCommercial($societe->getCommercialGerant());
        $etatProduit->setProduit($produit);
        $etatProduit->setPostDate(new \DateTime());
        $form = $this->createForm(EtatProduitType::class, $etatProduit);
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
                $task=$form->getData();
                $em=$this->getDoctrine()->getManager();
                $em->persist($task);
                $em->flush();
                return $this->redirectToRoute('sit_produit',array('id'=>$id,'idproduit'=>$idproduit));
        }
        return $this->render('SITPlatformBundle:produit:ajouterEtatProduit.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'idproduit'=>$idproduit,'id'=>$id));
    }

    public function modifierEtatProduitAction(Request $request,$id,$idproduit,$idetatproduit){
        $etatproduit=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:EtatProduit')->find($idetatproduit);
        $form = $this->createForm(EtatProduitType::class, $etatproduit);
        $form->get('status')->setData($etatproduit->getStatus());
        $form->get('budget')->setData($etatproduit->getBudget());
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $em=$this->getDoctrine()->getManager();
            $em->getRepository('SITPlatformBundle:EtatProduit')->find($idetatproduit);
            $em->flush();
            return $this->redirectToRoute('sit_produit',array('id'=>$id,'idproduit'=>$idproduit));
        }
        return $this->render('SITPlatformBundle:produit:modifierEtatProduit.html.twig',array(
            'form' => $form->createView(),'idproduit'=>$idproduit,'id'=>$id));


    }

    public function supprimerEtatProduitAction($id,$idproduit,$idetatproduit){
        $etatProduit=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:EtatProduit')->find($idetatproduit);
        $em=$this->getDoctrine()->getManager();
        $em->remove($etatProduit);
        $em->flush();
        return $this->redirectToRoute('sit_produit',array('id'=>$id,'idproduit'=>$idproduit));
    }

}
