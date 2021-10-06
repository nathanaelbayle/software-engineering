# Software Engineering

## Getting Started !

Dans un premier temps, il faut ajouter `sonar-scanner` et `sonarqube` au variable d'environnement.
### Installation de Sonar Scanner

```bash
export PATH=$PATH:$HOME/MASTER_S1/software-engineering/install/sonar-scanner/bin
```
### Installation de SonarQube

```bash
export PATH=$PATH:$HOME/MASTER_S1/software-engineering/install/sonarqube
```

Change dir for `software-engineering/install/sonarqube/bin/linux-x86-64` and exec `./sonar.sh start` and go to `http://localhost:9000`. Logins are 
`admin admin`.

<br />
<br />

## La qualité du Logiciel

#### Définition 

> La qualité représente l'ensemble des caractères, des propriétés qui font que quelque chose correspond bien ou mal à sa nature, à ce qu'on en attend.


- Fiabilité : Aptitude d'un produit logiciel à fonctionner dans des conditions anormales ;
- Compatibiliré : Facilité avec lequelle un logiciel peut être combiné avec d'autre logiciels ;
- Intégrité : Aptitude d'un logiciel à protéger son code et ses données contre des accès non autorisés ;
- Validité : Aptitude d'un produit logiciel à remplir exactement ses fonctions, définies par le cajier des charges et les spécifications ;
- Efficacité : Utilisation oprtimales des ressources matérielles ;
- **Réutilisation** : Aptitude d'un logiciel à être réutilisén en tout ou en partie, dans de nouvelles applications ;
- **Portabilité** : Facilité avec lequelle un logiciel peut être transférée sous différents environnements matériels et logiciels ;
- **Vérifiabilité** : Facilité de préparation des procédures de test ;
- **Extensibilité** : Facilité avec laquelle un logiciel se prête à une modification ou à une extension des fonctions qui lui sont demandées.


## Make research on :
- La dette technique
- Analyse Static : Détection automatique de comportements à haut risque 
- complexité cyclomatique -> autant que de test unitaires
- efferent coupling
- afference coupling  

> instabilité : $CE(CE+CA)$

<br />
<br />

# Les design Patterns

Concernant la conception **orienté-objet**, on souhaiterait un conception la plus **générique possible** (réutilisable, éprouvée, extensible, adaptable, performante, simple, itelligible, flexible, etc.. )


## Définition d'un design pattern

- C'est un patrons de conception
- Il offre des **solutions** à des **problèmes classiques** de conception rencontrés dans le développement d'applications.
- **Indépendants** du langage : **ce n'est pas du code !**

> C'est une technique avancé de programmation qui décrit un **structure commune et répétitive**.

## Pourquoi utiliser les disign patterns

- Disposer d'un catalogue de **solutions** a des problèmes
- Béneficier du **savoir faire** d'experts dans des contectes *éprouvés*
- **Faciliter et robustifier la conception** et accélérer sensiblement le processus de déveoppement
- **Faciliter la communication** entre développeurs

### Des inconvénients ?

- Peut devenir très lourd
- Patterns complexes pour résoudre des problèmes simples

[See wikipedia page related](https://fr.wikipedia.org/wiki/Patron_de_conception)


## Division des patterns

Il existe trois groupes de patterns
- Création : création d'entités
- Structure : interaction avec d'autre entités
- Comportement : Communication entre les objets


# Pattern de Création

- Abstratcion du processus de création
- Encapsulation de la logique de création
- On ne sait pas à l'avance ce qui sera créé ou comment cela sera crée


## Pattern Fabrique

### Problématiques
Obtenir facilement un objet prêt à l'emploi et qui correspond à nos besoins

### Solution
Uns classe qui encapsule la logique de création des objets en question

### Conséquences
Dispense d'incorporer à son code des classes spécifiques

> La fabrique permet d'instancier des objets dont le type est déribé d'un type abstrait
> La classe exacte de l'objet n'est donc pas connue par l'appelant.

```java
public class FabriqueAnimal {

    Animal getAnimal(Strin typeAnimal) throws ExceptionCreation {
        if (typeAnimal.equals("chat")) {
            return new Chat();
        } 
        else if (tupeAnimal.equals("chien")) {
            return new Chien();
        }
        throw new ExceptionCreation("Impossible de créer " + typeAnimal);
    }
}
```
