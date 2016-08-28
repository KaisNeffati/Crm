<?php


namespace OC\PlatformBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

use SIT\UserBundle\Entity\User;

class LoadUsers implements FixtureInterface
{
  // Dans l'argument de la méthode load, l'objet $manager est l'EntityManager
  public function load(ObjectManager $manager)
  {

    $nom="admin";
    $prenom="admin";
    $email="admin@admin.fr";
    $username="admin";
    $password='0000';
    $user=new User();
    $user->setNom($nom);
    $user->setPrenom($prenom);
    $user->setEmail($email);
    $user->setUsername($username);
    $user->setPlainPassword($password);
    $user->setEnabled(true);
    $user->setRoles(array('ROLE_ADMIN'));

     $manager->persist($user);
    $manager->flush();
  }
}
