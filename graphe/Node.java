/**
 *  Class Node
 * 
 * @autor Nathanaël Bayle
 */

package graphe;

/*****************************************************/
import java.util.*;

/** Classe pour manipuler un noeud d'un graphe **/
public class Node implements Comparable<Object>{
	
    /** identifiant du Node **/
    private int id;
    
    /** listes de successeurs et de prédecesseurs **/
    private TreeSet<Arc> succ;
    private TreeSet<Arc> pred;
    
    /** attributs dot **/
    private String label;
    private String color;
    private String shape;
    
    /** permet de compter le nb d'appels à compareTo **/
    @SuppressWarnings("unused")
	private int nbCompareTo = 0;

    /**
     *  Constructeur 
     *  @param int i
     **/
    Node(int i) {
        this.id = i;
        this.succ = new TreeSet<>();
        this.pred = new TreeSet<>();
        this.label = Integer.toString(i);
        this.color = "black";
        this.shape = "ellipse";
    }

    /** 
     * Constructeur 
     * @param int i
     * @param String label
     **/
    Node(int i, String label) {
        this.id = i;
        this.succ = new TreeSet<>();
        this.pred = new TreeSet<>();
        this.label = label;
        this.color = "black";
        this.shape = "ellipse";
    }

    /** accès à l'identifiant 
     * @return int id
     **/
    public int id() {
        return this.id;
    }

    /** accès à l'ensemble des successeurs 
     * @return SortedSet<Arc> succ
     **/
    public SortedSet<Arc> succ() {
        return this.succ;
    }

    /** accès à l'ensemble des predecesseurs
   * @return SortedSet<Arc> pred
   * */
    public SortedSet<Arc> pred() {
        return this.pred;
    }

    /** méthodes d'accès à un attribut 
     * @return String color
     **/
    public String color() {
        return this.color;
    }

    /** méthodes d'accès à un attribut 
     * @param String c
     **/
    public void setColor(String c) {
        this.color = c; // possibilité de tester la validité de c
    }

    /** méthodes d'accès à un attribut 
     * @return String shape
     **/
    public String shape() {
        return this.shape;
    }

    /** méthodes d'accès à un attribut 
     * @param String s
     **/
    public void setShape(String s) {
        this.shape = s; // possibilité de tester la validité de c
    }

    /** méthodes d'accès à un attribut 
     * @return label
     **/
    public String label() {
        return this.label;
    }

    /** méthodes d'accès à un attribut 
     * @param String l
     **/
    public void setLabel(String l) {
        this.label = l;
    }

    /** ajout d'un successeur 
     * @param Arc a
     **/
    public boolean addSucc(Arc a) {
        return this.succ.add(a);
    }

    /** test de l'existence d'un successeur 
     * @param Arc a
     **/
    public boolean containsSucc(Arc a) {
        return this.succ.contains(a);
    }

    /** suppression d'un successeur 
     * @param Arc a
     **/
    public boolean removeSucc(Arc a) {
        return this.succ.remove(a);
    }

    /** ajout d'un predecesseur 
     * @param Arc a
     **/
    public boolean addPred(Arc a) {
        return this.pred.add(a);
    }

    /** test de l'existence d'un predecesseur 
     * @param Arc a
     * @return prédecesseur
     **/
    public boolean containsPred(Arc a) {
        return this.pred.contains(a);
    }

    /** suppression d'un predecesseur 
     * @param Arc a
     **/
    public boolean removePred(Arc a) {
        return this.pred.remove(a);
    }

    /**
     * methode de comparaison necessaire pour implementer Comparable permet de
     * rechercher un Node dans un TreeSet
     **/
    @Override
    public int compareTo(Object o) {
    	setNbCompareTo();
        Node n = (Node) o; // C'est Node qui est entre
        if (this.id > n.id())
            return 1;
        if (this.id < n.id())
            return -1;
        return 0;
    }
    
    /** 
     * méthode equals
     * @param objet générique
     * @return boolean
     * */
    @Override
    public boolean equals(Object obj) {
    	return (this.compareTo(obj)> 0);
    }
    
    /**
     * méthode hashCode()
     * @return hashCode de l'objet Node
     */
    @Override
    public int hashCode(){
            return this.id * this.succ.hashCode() * this.pred.hashCode() * this.label.hashCode() * this.color.hashCode() * this.shape.hashCode();
    }
    
    /**
     * méthode setNbCompareTo
     * @return void add +1 to nbCompareTO
     */
    private void setNbCompareTo() {
    	this.nbCompareTo++;
    }
    
    /** methode d'affichage 
     * @return String format of a node
     **/
    public String toString() {
        return this.id + " ";
    }

    /** methode d'affichage grammaire dot **/
    public String toDot() {
        return this.id + " [label=" + this.label + ",color=" + this.color + ",shape=" + this.shape + "]\n";
    }

}// fin de Node
