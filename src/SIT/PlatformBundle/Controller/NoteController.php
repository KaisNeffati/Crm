<?php
/**
 * Created by PhpStorm.
 * User: Kais NEFFATI
 * Date: 8/12/2016
 * Time: 12:26 PM
 */

namespace SIT\PlatformBundle\Controller;


use SIT\PlatformBundle\Entity\Note;
use SIT\PlatformBundle\Form\NoteType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class NoteController extends Controller
{
    public function ajouterNoteAction(Request $request,$id){
        $note=new Note();
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $note->setSociete($societe);
        $note->setNoteafaire(0);
        $note->setPostDate(new \DateTime);
        $form = $this->createForm(NoteType::class, $note);
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $task=$form->getData();
            $em=$this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$id));
        }
        return $this->render('SITPlatformBundle:note:ajouterNote.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'id'=>$societe->getId()));
    }
    public function ajouterNoteAFaireAction(Request $request,$id){
        $note=new Note();
        $datenow=new \DateTime;
        $societe=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Societe')->find($id);
        $note->setSociete($societe);
        $note->setNoteafaire(1);
        $note->setPostDate($datenow);
        $form = $this->createForm(NoteType::class, $note);
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $task=$form->getData();
            $em=$this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$id));
        }
        return $this->render('SITPlatformBundle:note:ajouterNote.html.twig',array(
            'form' => $form->createView(),'name'=>$societe->getNom(),'id'=>$societe->getId()));
    }
    public function modifierNoteAction(Request $request,$id,$idnote){
        $note=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Note')->find($idnote);
        $form = $this->createForm(NoteType::class, $note);
        $form->get('date')->setData($note->getDate());
        $form->get('description')->setData($note->getDescription());
        $form->handleRequest($request);
        if($form->isSubmitted()&&$form->isValid()){
            $em=$this->getDoctrine()->getManager();
            $em->getRepository('SITPlatformBundle:Produit')->find($idnote);
            $em->flush();
            return $this->redirectToRoute('sit_societe',array('id'=>$id));
        }
        return $this->render('SITPlatformBundle:note:ajouterNote.html.twig',array(
            'form' => $form->createView(),'name'=>$note->getSociete()->getNom(),'id'=>$note->getSociete()->getId()));
    }
    public function supprimerNoteAction($id,$idnote){
        $note=$this->getDoctrine()->getManager()->getRepository('SITPlatformBundle:Note')->find($idnote);
        $em=$this->getDoctrine()->getManager();
        $em->remove($note);
        $em->flush();
        return $this->redirectToRoute('sit_societe',array('id'=>$id));
    }
}
