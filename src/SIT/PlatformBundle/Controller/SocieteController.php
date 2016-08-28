<?php
/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/21/2016
 * Time: 6:28 PM
 */

namespace SIT\PlatformBundle\Controller;


use SIT\PlatformBundle\Entity\Societe;
use SIT\PlatformBundle\Form\SocieteType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;

class SocieteController extends Controller
{
    public function ajouterSocieteAction(Request $request){
        $societe=new Societe();
        $user=$this->getUser();
        $societe->setCommercialApportant($user);
        $societe->setCommercialGerant($user);
        $form = $this->createForm(SocieteType::class, $societe);
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $task=$form->getData();
            $em=$this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$societe->getId()));
        }
        return $this->render('SITPlatformBundle:societe:ajouterSociete.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'id'=>$societe->getId()));
    }

    public function modifierSocieteAction(Request $request,$id){
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $form = $this->createForm(SocieteType::class, $societe);
        $form->get('nom')->setData($societe->getNom());
        $form->get('tel')->setData($societe->getTel());
        $form->get('fax')->setData($societe->getFax());
        $form->get('adresse')->setData($societe->getAdresse());
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $em=$this->getDoctrine()->getManager();
            $em->getRepository('SITPlatformBundle:societe')->find($id);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$id));
        }
        return $this->render('SITPlatformBundle:societe:modifierSociete.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'id'=>$id));


    }

    public function supprimerSocieteAction($id){
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $em=$this->getDoctrine()->getManager();
        $em->remove($societe);
        $em->flush();
        return $this->redirectToRoute('sit_platform_homepage');
    }

    public function modifierCommercialGerantAction(Request $request,$id){
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:societe')->find($id);
        $form = $this->createFormBuilder($societe)
            ->add('commercialGerant', EntityType::class,array(
                'class' => 'SITUserBundle:User',
                'choice_label' => 'username',

            ))
            ->add('enregister', SubmitType::class, array('label' => 'Enregister'))
            ->getForm();;
        $form->get('commercialGerant')->setData($societe->getCommercialGerant());
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $em=$this->getDoctrine()->getManager();
            $em->getRepository('SITPlatformBundle:Societe')->find($id);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$id));
        }
        return $this->render('SITPlatformBundle:societe:modifierCommercialGerant.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'id'=>$societe->getId()));
    }

    public function afficherSocieteAction($id){
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $listpersonnel=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:personnel')->findBy(array('societe' => $societe));
        $listproduit =$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Produit')->findBySociete($societe);
        $demo=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Demo')->findBySociete($id);
        $repository = $this->getDoctrine()->getRepository('SITPlatformBundle:Note');
        $query = $repository->createQueryBuilder('p')
            ->where('p.societe = :societe')
            ->setParameter('societe', $societe)
            ->orderBy('p.post_date', 'DESC')
            ->getQuery();

        $listeNote = $query->getResult();
        $i=0;
        if(sizeof($demo)>0){
            $i=1;
        }
        return $this->render('SITPlatformBundle:commercial:societe.html.twig',array('societe' => $societe,'listNote'=>$listeNote,'listpersonnel'=>$listpersonnel,'listproduit'=>$listproduit,'demo'=>$demo,'nbrdemo'=>$i));
    }
}
