<?php

namespace SIT\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * demo
 *
 * @ORM\Table(name="demo")
 * @ORM\Entity(repositoryClass="SIT\PlatformBundle\Repository\DemoRepository")
 */
class Demo
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="SIT\PlatformBundle\Entity\Societe" ,inversedBy="demo")
     * @ORM\JoinColumn(nullable=false)
     */
    private $societe;


    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=255)
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="mots_d_passe", type="string", length=255)
     */
    private $motsDPasse;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_demande", type="date")
     */
    private $dateDemande;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_d_debut", type="date")
     */
    private $dateDDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_d_fin", type="date")
     */
    private $dateDFin;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set login
     *
     * @param string $login
     *
     * @return demo
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set motsDPasse
     *
     * @param string $motsDPasse
     *
     * @return demo
     */
    public function setMotsDPasse($motsDPasse)
    {
        $this->motsDPasse = $motsDPasse;

        return $this;
    }

    /**
     * Get motsDPasse
     *
     * @return string
     */
    public function getMotsDPasse()
    {
        return $this->motsDPasse;
    }

    /**
     * Set dateDemande
     *
     * @param \DateTime $dateDemande
     *
     * @return demo
     */
    public function setDateDemande($dateDemande)
    {
        $this->dateDemande = $dateDemande;

        return $this;
    }

    /**
     * Get dateDemande
     *
     * @return \DateTime
     */
    public function getDateDemande()
    {
        return $this->dateDemande;
    }

    /**
     * Set dateDDebut
     *
     * @param \DateTime $dateDDebut
     *
     * @return demo
     */
    public function setDateDDebut($dateDDebut)
    {
        $this->dateDDebut = $dateDDebut;

        return $this;
    }

    /**
     * Get dateDDebut
     *
     * @return \DateTime
     */
    public function getDateDDebut()
    {
        return $this->dateDDebut;
    }

    /**
     * Set dateDFin
     *
     * @param \DateTime $dateDFin
     *
     * @return demo
     */
    public function setDateDFin($dateDFin)
    {
        $this->dateDFin = $dateDFin;

        return $this;
    }

    /**
     * Get dateDFin
     *
     * @return \DateTime
     */
    public function getDateDFin()
    {
        return $this->dateDFin;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return demo
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return demo
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @return mixed
     */
    public function getSociete()
    {
        return $this->societe;
    }

    /**
     * @param mixed $societe
     */
    public function setSociete($societe)
    {
        $this->societe = $societe;
    }

}

