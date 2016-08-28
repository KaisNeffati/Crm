<?php

/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/24/2016
 * Time: 1:47 PM
 */
namespace SIT\UserBundle\Controller;

use SIT\UserBundle\Entity\User;
use SIT\UserBundle\Form\RegistrationType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class UtilisateurController extends Controller
{
    public function utilisateursAction(){
        $listUtilisateurs=$this->getDoctrine()->getManager()->getRepository('SITUserBundle:User')->findAll();
        return $this->render('SITUserBundle:usersControlePanel:Utilisateurs.html.twig',array('listUtilisateurs' => $listUtilisateurs));
    }
    public function ajouterUtilisateurAction(Request $request){
        $utilisateur=new User();
        $utilisateur->setEnabled(true);
        $form = $this->createForm(RegistrationType::class, $utilisateur);
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $task=$form->getData();
            $em=$this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();
            return $this->redirectToRoute('sit_utilisateurs');
        }
        return $this->render('SITUserBundle:usersControlePanel:ajouterUtilisateur.html.twig',array(
            'form' => $form->createView()));
    }
    public function modifierUtilisateurAction(Request $request,$idutilisateur){
        $utilisateur=$this->getDoctrine()->getManager()->getRepository('SITUserBundle:User')->find($idutilisateur);
        $form = $this->createForm(RegistrationType::class, $utilisateur);
        $form->get('nom')->setData($utilisateur->getNom());
        $form->get('prenom')->setData($utilisateur->getPrenom());
        $form->get('cin')->setData($utilisateur->getCin());
        $form->get('email')->setData($utilisateur->getEmail());
        $form->get('username')->setData($utilisateur->getUsername());
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $em=$this->getDoctrine()->getManager();
            $em->getRepository('SITUserBundle:User')->find($idutilisateur);
            $em->flush();
            return $this->redirectToRoute('sit_utilisateurs');
        }
        return $this->render('SITUserBundle:usersControlePanel:modifierUtilisateur.html.twig',array(
            'form' => $form->createView()));
    }
    public function supprimerUtilisateurAction($idutilisateur){
        $utilisateur=$this->getDoctrine()->getManager()->getRepository('SITUserBundle:User')->find($idutilisateur);
        $em=$this->getDoctrine()->getManager();
        try{
            $em->remove($utilisateur);
            $em->flush();
        }
        catch(\Exception $e){
            $this->addFlash(
                'notice',
                'Impossible de supprimer cette Utilisateur!'
            );
        }
        return $this->redirectToRoute('sit_utilisateurs');
    }

}
