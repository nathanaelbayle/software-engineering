/**
 *  Class Arc
 * 
 * @autor Nathanaël Bayle
 */

package graphe;

/*****************************************************/

public class Arc {
    /** Node origine de l'Arc **/
    private Node from;
    /** Node de destination de l'Arc **/
    private Node to;
    /** Arc valué **/
    private double value;
    /** attributs dot **/
    private String color;
    private String label;

    /** 
     * constructeurs
     * 
     * @param from Node de départ
     * @param to   Node d'arrivé
     **/
    Arc(Node from, Node to) {
        this.from = from;
        this.to = to;
        this.color = "black";
        this.label = "";
        this.value = -1;
    }

    /** 
     * accesseur du Node origine
     * @return attibut from
     **/
    public Node from() {
        return this.from;
    }

    /** 
     * accesseur du Node extremite 
     * @return attribut to
     **/
    public Node to() {
        return this.to;
    }

    /** 
     * méthodes d'accès aux attributs
     * @return attribut value 
     **/
    public double value() {
        return this.value;
    }

    public void setValue(double v) {
        this.value = v;
        this.label = "" + v;
    }

    /** 
     * méthodes d'accès a un attribut 
     * @return attribut color
     **/
    public String color() {
        return this.color;
    }

    /** 
     * méthodes d'accès a un attribut 
     * @param c nouvelle couleur
     **/
    public void setColor(String c) {
        this.color = c;
    }

    /** 
     * méthodes d'accès a un attribut 
     * @return attribut label
     **/
    public String label() {
        return this.label;
    }

    /** 
     * méthodes d'accès a un attribut 
     * @param l nouveau label
     **/
    public void setLabel(String l) {
        this.label = l;
    }

    /**
     * methode de comparaison necessaire pour implementer Comparable Permet de
     * rechercher un Arc dans un TreeSet
     * 
     * @param o un objet Arc
     **/
    public int compareTo(Arc o) {
        if (this.from.id() == o.from().id() && this.to.id() == o.to().id())
            return 0;
        if (this.from.id() < o.from().id() || this.from.id() == o.from().id() && this.to.id() < o.to().id())
            return -1;
        return 1;
    }
    
     
    /** 
     * métjode toString()
     * @return Arc sous forme d'un String
     */
    public String toString() {
        return this.from.id() + "->" + this.to.id();
    }

    /** 
     * methode d'affichage grammaire dot 
     * @return affchage sous forme de point
     **/
    public String toDot() {
        String arc = this.toString();
        // gestion des attributs dot
        String l = "";
        if (this.label().length() != 0)
            l = "label=" + this.label() + ",";
        String c = "color=" + this.color();
        return arc + " [" + l + c + "]\n";
    }
}// end of Arc
