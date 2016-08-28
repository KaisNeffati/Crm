<?php

namespace SIT\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EtatProduitType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('status',ChoiceType::class,array(
                'choices'  => array(
                    'Potentiel' => 'Potentiel',
                    'Prospecting' => 'Prospecting',
                    'Qualifying' => 'Qualifying',
                    'Solution Presentation' => 'Solution Presentation',
                    'Proposal' => 'Proposal',
                    'Closing' => 'Closing',
                    'Classé' => 'Classé',
                    'Support' => 'Support'
                )))
            ->add('budget',IntegerType::class)
            ->add('enregister', SubmitType::class, array('label' => 'Enregister'))
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'SIT\PlatformBundle\Entity\etatProduit'
        ));
    }
}
