<?php

namespace SIT\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProduitType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('periodeLivraison',ChoiceType::class,array(
                'choices'  => array(
                    'T1' => 1,
                    'T2' => 2,
                    'T3' => 3,
                    'T4' => 4
                )))
            ->add('dateLivraison',DateType::class,array(
                'widget' => 'choice',
                'years'  => range(date('Y') -20, date('Y')+20)
            ))
            ->add('libelle',TextType::class)
            ->add('type_d_installation',TextType::class)
            ->add('enregister', SubmitType::class, array('label' => 'Enregister'))
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'SIT\PlatformBundle\Entity\produit'
        ));
    }
}
