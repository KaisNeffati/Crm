<?php

namespace SIT\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DemoType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('login')
            ->add('motsDPasse')
            ->add('dateDemande', DateType::class)
            ->add('dateDDebut', DateType::class)
            ->add('dateDFin', DateType::class)
            ->add('description')
            ->add('email')
            ->add('enregister', SubmitType::class, array('label' => 'Enregister'))
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'SIT\PlatformBundle\Entity\demo'
        ));
    }
}
