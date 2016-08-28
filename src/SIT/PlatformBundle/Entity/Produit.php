<?php

namespace SIT\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * produit
 *
 * @ORM\Table(name="produit")
 * @ORM\Entity(repositoryClass="SIT\PlatformBundle\Repository\ProduitRepository")
 */
class Produit
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
     * Bidirectional - Many Comments are authored by one user (OWNING SIDE)
     *
     * @ORM\ManyToOne(targetEntity="SIT\PlatformBundle\Entity\Societe",inversedBy="societeproduits")
     */
    private $societe;

    /**
     * Bidirectional - One-To-Many (INVERSE SIDE)
     *
     * @ORM\OneToMany(targetEntity="SIT\PlatformBundle\Entity\EtatProduit", mappedBy="produit",cascade={"persist", "remove"})
     */
    private $etatproduits;


    /**
     * @var string
     *
     * @ORM\Column(name="periodeLivraison", type="string", length=255)
     */
    private $periodeLivraison;

    /**
     * @var date
     *
     * @ORM\Column(name="dateLivraison", type="date")
     */
    private $dateLivraison;

    /**
     * @var string
     *
     * @ORM\Column(name="libelle", type="string", length=255)
     */
    private $libelle;

    /**
     * @var string
     *
     * @ORM\Column(name="typeDInstallation", type="string", length=255)
     */
    private $typeDInstallation;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="post_date", type="datetime")
     */
    private $post_date;

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
     * @return \DateTime
     */
    public function getPostDate()
    {
        return $this->post_date;
    }

    /**
     * @param \DateTime $post_date
     */
    public function setPostDate($post_date)
    {
        $this->post_date = $post_date;
    }


    /**
     * Set periodeLivraison
     *
     * @param string $periodeLivraison
     *
     * @return produit
     */
    public function setPeriodeLivraison($periodeLivraison)
    {
        $this->periodeLivraison = $periodeLivraison;

        return $this;
    }

    /**
     * Get periodeLivraison
     *
     * @return string
     */
    public function getPeriodeLivraison()
    {
        return $this->periodeLivraison;
    }

    /**
     * Set libelle
     *
     * @param string $libelle
     *
     * @return produit
     */
    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * Get libelle
     *
     * @return string
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * Set typeDInstallation
     *
     * @param string $typeDInstallation
     *
     * @return produit
     */
    public function setTypeDInstallation($typeDInstallation)
    {
        $this->typeDInstallation = $typeDInstallation;

        return $this;
    }

    /**
     * Get typeDInstallation
     *
     * @return string
     */
    public function getTypeDInstallation()
    {
        return $this->typeDInstallation;
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

    /**
     * @return int
     */
    public function getDateLivraison()
    {
        return $this->dateLivraison;
    }

    /**
     * @param int $dateLivraison
     */
    public function setDateLivraison($dateLivraison)
    {
        $this->dateLivraison = $dateLivraison;
    }

    /**
     * @return mixed
     */
    public function getEtatproduits()
    {
        return $this->etatproduits;
    }

    /**
     * @param mixed $etatproduits
     */
    public function setEtatproduits($etatproduits)
    {
        $this->etatproduits = $etatproduits;
    }


}

