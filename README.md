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

<br />

## Pattern Fabrique

La fabrique (factory method) est un patron de conception créationnel utilisé en programmation orientée objet. Elle permet d'instancier des objets dont le type est dérivé d'un type abstrait. La classe exacte de l'objet n'est donc pas connue par l'appelant.

Plusieurs fabriques peuvent être regroupées en une fabrique abstraite permettant d'instancier des objets dérivant de plusieurs types abstraits différents.

Les fabriques étant en général uniques dans un programme, on utilise souvent le patron de conception singleton pour les implémenter.

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

<br />

## Pattern Fabrique abstraite

Elle fournit une interface pour créer des familles d'objets liés ou inter-dépendants sans avoir à préciser au moment de leur création la classe concrète à utiliser.

### Problématique
Encapsuler un groupe de fabrique ayant une thématique commune

### Intention
Isoler la création des objets de leur utilisation. 

### Solution
Encapsulation

### Conséquences
- Isole les classe concrètes
- Facilite la substituion
- Favorise le maintient de la cohérence

<br />

## Pattern Builder

Le monteur (builder) est un patron de conception utilisé pour la création d'une variété d'objets complexes à partir d'un objet source. L'objet source peut consister en une variété de parties contribuant individuellement à la création de chaque objet complet grâce à un ensemble d'appels à l'interface commune de la classe abstraite Monteur.

<br />

## Pattern Prototype 

Le patron de conception prototype est utilisé lorsque la création d'une instance est complexe ou consommatrice en temps. Plutôt que créer plusieurs instances de la classe, on copie la première instance et on modifie la copie de façon appropriée.

Pour implémenter ce patron il faut déclarer une `classe abstraite` spécifiant une méthode virtuelle pure appelée `clone()`. Toute classe nécessitant un constructeur *polymorphique* dérivera de cette classe abstraite et implémentera la méthode `clone()`.

Le client de cette classe, au lieu d'écrire du code invoquant directement l'opérateur `new` sur une classe explicitement connue, appellera la méthode `clone()` sur le prototype ou passera par un mécanisme fourni par un autre patron de conception (par exemple une méthode de fabrique avec un paramètre désignant la classe concrète à instancier).

<br />

## Pattern Singleton

L'objectif est de restreindre l'instanciation d'une classe à un seul objet (ou bien à quelques objets seulement). Il est utilisé lorsqu'on a besoin exactement d'un objet pour coordonner des opérations dans un système. Le modèle est parfois utilisé pour son efficacité, lorsque le système est plus rapide ou occupe moins de mémoire avec peu d'objets qu'avec beaucoup d'objets similaires.


# Pattern de Structures

## Pattern Adaptateur

[See wikipedia](https://fr.wikipedia.org/wiki/Adaptateur_(patron_de_conception))

#### Utilisation particuliere

```java
public class MouseBeeper extends MouseAdapter
{
    public void mouseClicker(MouseEvent e)
    {
        Toolkit.getDefaultToolkit().beep();
    }
}
```

##  Pattern Decorateur

[See wikipedia](https://fr.wikipedia.org/wiki/Décorateur_(patron_de_conception))

## Pattern Facade

Le patron façade fournit une interface unifiée sur un ensemble d'interfaces d'un système1. Il est utilisé pour réaliser des interfaces de programmation. Si un sous-système comporte plusieurs composants qui doivent être utilisés dans un ordre précis, une classe façade sera mise à disposition, et permettra de contrôler l'ordre des opérations et de cacher les détails techniques des sous-systèmes.

[See Wikipedia](https://fr.wikipedia.org/wiki/Façade_(patron_de_conception))

## Pattern Peoxy (proccuration)

Ce patron est un substitut d'un objet, qui permet de contrôler l'utilisation de ce dernier1. Un proxy est un objet destiné à protéger un autre objet. Le proxy a la même interface que l'objet à protéger. Un proxy peut être créé par exemple pour permettre d’accéder à distance à un objet (via un middleware). Le proxy peut également être créé dans le but de retarder la création de l'objet protégé — qui sera créé immédiatement avant d'être utilisé. Dans sa forme la plus simple, un proxy ne protège rien du tout et transmet tous les appels de méthode à l'objet cible.

[See Wikipedia](https://fr.wikipedia.org/wiki/Proxy_(patron_de_conception))


## Poinds Mouche (flyweight)

>.

## Pattern Pont

Découplé l'interface de l'implémentation 

## Pattern Composite

>.

<br />
<br />

# Pattern Comportementaux 

## Itérateur

## État

## Interpréteur

## Visiteur

## Observateur

## Stratégie

## Mémento

## Patron de méthode (template methode)

## Chaîne de responsabilité

## Commande

## Médiateur


<br />
<br />

--- 

<br />
<br />

































