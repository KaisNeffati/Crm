<?php
/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/22/2016
 * Time: 5:29 PM
 */

namespace SIT\PlatformBundle\Controller;


use SIT\PlatformBundle\Entity\Demo;
use SIT\PlatformBundle\Form\DemoType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DemoController extends Controller
{
    public function ajouterDemoAction(Request $request,$id){
        $demo=new Demo();
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $demo->setSociete($societe);
        $form = $this->createForm(DemoType::class, $demo);
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $task=$form->getData();
            $em=$this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$id));
        }
        return $this->render('SITPlatformBundle:demo:ajouterDemo.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'id'=>$societe->getId()));
    }

    public function afficherDemoAction($id,$iddemo){
        $demo=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Demo')->find($iddemo);
        return $this->render('SITPlatformBundle:demo:afficherDemo.html.twig',array('demo' => $demo,'id' => $id));
    }
    public function modifierDemoAction(Request $request,$id,$iddemo){
        $demo=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Demo')->find($iddemo);
        $form = $this->createForm(DemoType::class, $demo);
        $form->get('login')->setData($demo->getLogin());
        $form->get('motsDPasse')->setData($demo->getMotsDPasse());
        $form->get('dateDemande')->setData($demo->getDateDemande());
        $form->get('motsDPasse')->setData($demo->getDateDDebut());
        $form->get('login')->setData($demo->getDateDFin());
        $form->get('motsDPasse')->setData($demo->getDescription());
        $form->get('login')->setData($demo->getEmail());
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $em=$this->getDoctrine()->getManager();
            $em->getRepository('SITPlatformBundle:Demo')->find($iddemo);
            $em->flush();
            return $this->redirectToRoute('sit_demo',array('id'=>$id,'iddemo'=>$iddemo));
        }
        return $this->render('SITPlatformBundle:demo:ModifierDemo.html.twig',array(
            'form' => $form->createView(),'name'=>$demo->getSociete()->getNom(),'id'=>$demo->getSociete()->getId()));
    }
    public function supprimerDemoAction($id,$iddemo){
        $demo=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Demo')->find($iddemo);
        $em=$this->getDoctrine()->getManager();
        $em->remove($demo);
        $em->flush();
        return $this->redirectToRoute('sit_societe',array('id'=>$id));
    }


}
