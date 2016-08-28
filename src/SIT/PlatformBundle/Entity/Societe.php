<?php

namespace SIT\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * societe
 *
 * @ORM\Table(name="societe")
 * @ORM\Entity(repositoryClass="SIT\PlatformBundle\Repository\SocieteRepository")
 */
class Societe
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
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var int
     *
     * @ORM\Column(name="tel", type="integer")
     */
    private $tel;

    /**
     * @var int
     *
     * @ORM\Column(name="fax", type="integer")
     */
    private $fax;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse", type="string", length=255)
     */
    private $adresse;

    /**
     * @ORM\OneToOne(targetEntity="SIT\PlatformBundle\Entity\Demo",mappedBy="societe",cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="demo_id", referencedColumnName="id")
     */
    private $demo;

    /**
     * @ORM\ManyToOne(targetEntity="SIT\UserBundle\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     */
    private $commercialApportant;

    /**
     * @ORM\ManyToOne(targetEntity="SIT\UserBundle\Entity\User")
     * @ORM\JoinColumn(nullable=false)
     */
    private $commercialGerant;

    /**
     * Bidirectional - One-To-Many (INVERSE SIDE)
     *
     * @ORM\OneToMany(targetEntity="SIT\PlatformBundle\Entity\Produit", mappedBy="societe",cascade={"persist", "remove"})
     */
    private $societeproduits;

    /**
     * Bidirectional - One-To-Many (INVERSE SIDE)
     *
     * @ORM\OneToMany(targetEntity="SIT\PlatformBundle\Entity\Personnel", mappedBy="societe",cascade={"persist", "remove"})
     */
    private $societepersonnel;

    /**
     * Bidirectional - One-To-Many (INVERSE SIDE)
     *
     * @ORM\OneToMany(targetEntity="SIT\PlatformBundle\Entity\Note", mappedBy="societe",cascade={"persist", "remove"})
     */
    private $societenotes;

    /**
     * @return mixed
     */
    public function getSocietepersonnel()
    {
        return $this->societepersonnel;
    }

    /**
     * @param mixed $societepersonnel
     */
    public function setSocietepersonnel($societepersonnel)
    {
        $this->societepersonnel = $societepersonnel;
    }

    /**
     * @return mixed
     */
    public function getSocieteproduits()
    {
        return $this->societeproduits;
    }

    /**
     * @param mixed $societeproduits
     */
    public function setSocieteproduits($societeproduits)
    {
        $this->societeproduits = $societeproduits;
    }

    /**
     * @return mixed
     */
    public function getSocietenotes()
    {
        return $this->societenotes;
    }

    /**
     * @param mixed $societenotes
     */
    public function setSocietenotes($societenotes)
    {
        $this->societenotes = $societenotes;
    }


    /**
     * @return mixed
     */
    public function getCommercialApportant()
    {
        return $this->commercialApportant;
    }

    /**
     * @param mixed $commercialApportant
     */
    public function setCommercialApportant($commercialApportant)
    {
        $this->commercialApportant = $commercialApportant;
    }

    /**
     * @return mixed
     */
    public function getCommercialGerant()
    {
        return $this->commercialGerant;
    }

    /**
     * @param mixed $commercialGérant
     */
    public function setCommercialGerant($commercialGerant)
    {
        $this->commercialGerant = $commercialGerant;
    }

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
     * Set nom
     *
     * @param string $nom
     *
     * @return societe
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set tel
     *
     * @param integer $tel
     *
     * @return societe
     */
    public function setTel($tel)
    {
        $this->tel = $tel;

        return $this;
    }

    /**
     * Get tel
     *
     * @return int
     */
    public function getTel()
    {
        return $this->tel;
    }

    /**
     * Set fax
     *
     * @param integer $fax
     *
     * @return societe
     */
    public function setFax($fax)
    {
        $this->fax = $fax;

        return $this;
    }

    /**
     * Get fax
     *
     * @return int
     */
    public function getFax()
    {
        return $this->fax;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     *
     * @return societe
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse
     *
     * @return string
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * @return mixed
     */
    public function getDemo()
    {
        return $this->demo;
    }

    /**
     * @param mixed $demo
     */
    public function setDemo($demo)
    {
        $this->demo = $demo;
    }

}

