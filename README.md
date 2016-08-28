# SITPlatform
Code source de la plateforme CRM est construite par Kais NEFFATI.

##SensioLabsInsight:
  	
  	Excellent!
	Despite a very thorough analysis, SensioLabsInsight couldn't find a single violation in the whole codebase of this project .
	This is very rare, and is worthy of the Platinum medal.
	Congratulations to all the developers of this project for such a high quality!

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/9e2f0bac-b682-4731-b3a8-645ede1ed0fc/big.png)](https://insight.sensiolabs.com/projects/9e2f0bac-b682-4731-b3a8-645ede1ed0fc)

# Installation
## 1. Récupérer le code

Via Git: [link](https://github.com/KaisNeffati/CrmSit_final)

## 2. Définir vos paramètres d'application
Pour ne pas qu'on se partage tous nos mots de passe, le fichier `app/config/parameters.yml` est ignoré dans ce dépôt. A la place, vous avez le fichier `parameters.yml.dist` que vous devez renommer (enlevez le `.dist`) et modifier.

## 3. Télécharger les vendors
Avec Composer bien évidemment :

    php composer.phar install

## 4. Créez la base de données
Si la base de données que vous avez renseignée dans l'étape 2 n'existe pas déjà, créez-la :

    php bin/console doctrine:database:create

Puis créez les tables :

    php bin/console doctrine:schema:update --dump-sql
    php bin/console doctrine:schema:update --force

Enfin, éventuellement, ajoutez les fixtures :

    php bin/console doctrine:fixtures:load

## 5. Publiez les assets
Publiez les assets dans le répertoire web :

    php bin/console assets:install web

## Et profitez !
