<?php

namespace SIT\UserBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('prenom')
            ->add('cin')
            ->add('roles',ChoiceType::class,array(
                'choices'  => array(
                    'ROLE_COMMERCIAL' => 'ROLE_COMMERCIAL',
                    'ROLE_BUSINESS_DEVELOPER' => 'ROLE_BUSINESS_DEVELOPER',
                    'ROLE_ADMIN' => 'ROLE_ADMIN',
                ),
                'multiple' => true))
            ->add('enregister', SubmitType::class, array('label' => 'Enregister'));
    }

    public function getParent()
    {
        return 'FOS\UserBundle\Form\Type\RegistrationFormType';

    }

    public function getBlockPrefix()
    {
        return 'app_user_registration';
    }

    public function getName()
    {
        return $this->getBlockPrefix();
    }
}
