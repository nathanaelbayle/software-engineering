/**
 *  Class Graphe
 * 
 * @autor Nathanaël Bayle
 */
package graphe;
/*****************************************************/

import java.util.*;
import java.io.*;
import java.security.SecureRandom;


/**
 * Classe Graphe permettant de manipuler des graphes. Représentation par listes
 * de successeurs
 **/
class Graphe {
	
	private static final SecureRandom ran = new SecureRandom();
	
	/** color  */
	private static String cblack = "black";
	private static String cblue = "blue";
	private static String cred = "red";
	private static String cgreen = "green";
	
	/** ensemble de Node (ou NodeSet) **/
	public final SortedSet<Node> s;

	/** constructeur **/
	Graphe() {
		this.s = new TreeSet<>();
	}

	/** accès à l'ensemble de Node **/
	public SortedSet<Node> getS() {
		return this.s;
	}

	/** ajout d'un Node dans le graphe 
	 * @param Node n
	 **/
	public boolean addNode(Node n) {
		return this.s.add(n);
	}

	/** test de l'existence d'un Node dans le graphe 
	 * @param int i
	 **/
	public boolean containsNode(int i) {
		return this.s.contains(new Node(i));
	}

	/** suppression d'un Node dans le graphe
	 * @param Node n
	 * @return boolean
	 **/
	public boolean removeNode(Node n) {
		if (!this.s.remove(n))
			return false;
		for (Iterator<Arc> i = n.succ().iterator(); i.hasNext();) {
			Arc a = i.next();
			Node n2 = a.to();
			n2.removePred(a);
		}
		for (Iterator<Arc> i = n.pred().iterator(); i.hasNext();) {
			Arc a = i.next();
			Node n2 = a.from();
			n2.removeSucc(a);
		}
		return true;
	}

	/** accès à un Node du graphe 
	 * @param int i
	 **/
	public Node getNode(int i) {
		if (this.containsNode(i))
			for (Iterator<Node> it = this.s.iterator(); it.hasNext();) {
				Node n = it.next();
				if (n.id() == i)
					return n;
			}
		return null;
	}

	/** test de l'existence d'un Arc dans le graphe 
	 * @param int i
	 * @param int j
	 **/
	public boolean containsArc(int i, int j) {
		if (this.containsNode(i) && this.containsNode(j)) {
			Node from = this.getNode(i);
			Node to = this.getNode(j);
			return from.containsSucc(new Arc(from, to));
		}
		return false;
	}

	/** accès à un Arc du graphe
	 * @param int i
	 * @param int j 
	 **/
	public Arc getArc(int i, int j) {
		if (this.containsArc(i, j)) {
			Node from = this.getNode(i);
			for (Iterator<Arc> it = from.succ().iterator(); it.hasNext();) {
				Arc a = it.next();
				if (a.from().id() == i && a.to().id() == j)
					return a;
			}
		}
		return null;
	}

	/** ajout d'un Arc dans le graphe
	 * @param Arc a
	 **/
	public boolean addArc(Arc a) {
		int i = a.from().id();
		int j = a.to().id();
		if (this.containsNode(i) && this.containsNode(j) && !this.containsArc(i, j)) {
			a.from().addSucc(a);
			a.to().addPred(a);
			return true;
		}
		return false;
	}

	/** suppression d'un Arc dans le graphe 
	 * @param Arc a
	 **/
	public boolean removeArc(Arc a) {
		int i = a.from().id();
		int j = a.to().id();
		if (this.containsNode(i) && this.containsNode(j) && this.containsArc(i, j)) {
			a.from().removeSucc(a);
			a.to().removePred(a);
			return true;
		}
		return false;
	}
	
	/** méthode nbNodes
	 * 
	 * @return int nombre de nodes
	 */
	public int nbNodes() {
		return this.s.size();
	}
	
	/** méthode nbArcs
	 * 
	 * @return int nombre d'arcs
	 */
	public int nbArcs() {
		int nb = 0;
		for (Iterator<Node> i =  s.iterator(); i.hasNext();) {
			Node n = i.next();
			nb += n.succ().size();
		}
		return nb;
	}

	/** colorier tous les noeuds et arcs d'une meme couleur 
	 * @param String color
	 */
	public void setColor(String color) {
		for (Iterator<Node> i = s.iterator(); i.hasNext();) {
			Node n = i.next();
			n.setColor(color);
			for (Iterator<Arc> j = n.succ().iterator(); j.hasNext();) {
				Arc a = j.next();
				a.setColor(color);
			}
		}
	}

	/** methode d'affichage 
	 * @return String format du graphe
	 **/
	public String toString() {
        StringBuilder graph = new StringBuilder("");
        StringBuilder nodes = new StringBuilder("Nodes = {");
        StringBuilder arcs = new StringBuilder("Arcs = {");

        graph.append( "G --> " ).append(this.nbNodes()).append( " Nodes \n" );
		graph.append( "             " ).append(this.nbArcs()).append( " Arcs \n ");
		for (Iterator<Node> i = s.iterator(); i.hasNext();) {
			Node n = i.next();
			nodes.append(" ").append(n);
			SortedSet<Arc> succ = n.succ();
			// Parcours de l'ensemble des successeurs
			for (Iterator<Arc>  j = succ.iterator(); j.hasNext();) {
				Arc a = j.next();
				arcs.append(" ").append(a);
			}

		}
		return (graph.append(nodes).append("}\n").append(arcs).append("}\n")).toString();
	}

	/** methode d'affichage grammaire dot 
	 * @param Grapg g
	 * @param String filename
	 **/
	public static void toDot(Graphe g, String filename) throws IOException {
        FileOutputStream fich = new FileOutputStream(filename);
        
        try(DataOutputStream out = new DataOutputStream(fich);) {
            out.writeBytes("digraph G {\n");
            StringBuilder nodes = new StringBuilder("");
            StringBuilder arcs = new StringBuilder("");
            // parcours de l'ensemble de Node
            for (Iterator<Node> i = g.s.iterator(); i.hasNext();) {
                Node node = i.next();
                nodes.append(" ");
                nodes.append(node.toDot());
                TreeSet<Arc> succ = (TreeSet<Arc>) node.succ();
                // parcours de l'ensemble des successeurs de N
                for (Arc element : succ) {
                    Arc newArc = element;
    
                    String arc = newArc.toString();
                    String string = "";
                    String label = "";
                    if (newArc.label().length() != 0)
                        label = "label=" + newArc.label() + ",";
                    String color = "color=" + newArc.color();
                    string += arc + " [" + label + color + "]\n";
                    arcs.append(" ");
                    arcs.append(string);
                }
            }
            out.writeBytes(nodes.toString());
            out.writeBytes(arcs.toString());
            out.writeBytes("}");
        }
    }

	/**
	 * méthode divGraph1
	 * @param int nb
	 * @param boolean visu
	 * @return graphe
	 */
	public static Graphe divGraph1(int nb, boolean visu) {
		Graphe g = new Graphe();
		for (int i = 2; i <= nb; i++) {
			Node n = new Node(i);
			if (i % 2 == 0 && visu) {
				n.setColor("red");
			}
			g.addNode(n);
		}
		// ajout des arcs
		for (int i = 2; i <= nb; i++)

			for (int j = 2; j <= nb; j++)

				if (i % j == 0) {
					Node n1 = g.getNode(i);
					Node n2 = g.getNode(j);
					Arc a = new Arc(n2, n1);
					if (visu) {
						int div = i / j;
						String label = div + "";
						a.setLabel(label);
					}
					g.addArc(a);
				}

		return g;
	}

	// ---------
	/** parcours en largeur 
	 * @param boolean visu
	 */
	public void parcoursLargeur(boolean visu) {
		// couleur noire (inexplorée) pour tous les noeuds
		for (Iterator<Node> i = s.iterator(); i.hasNext();) {
			Node n = i.next();
			n.setColor(cblack);
		}
		// parcours à partir d'une source inexplorée
		for (Iterator<Node> i = this.s.iterator(); i.hasNext();) {
			Node n = i.next();
			if (n.color().equals(cblack))
				parcoursLargeur(n, visu);
		}
		// remet les sommets en noir
		for (Iterator<Node> i = s.iterator(); i.hasNext();) {
			Node n = i.next();
			n.setColor(cblack);
		}
	}

	/** parcours en largeur à partir d'une source 
	 * @param Node s
	 * @param boolean visu
	 **/
	private void parcoursLargeur(Node s, boolean visu) {
		s.setColor("blue");
		ArrayList<Node> f = new ArrayList<>();
		f.add(s);
		Node n = f.get(0);
		while (!f.isEmpty()) {
			for (Iterator<Arc> i = n.succ().iterator(); i.hasNext();) {
				Arc a = i.next();
				Node n2 = a.to();
				if (n2.color().equals(cblack) && !f.contains(n2)) {
					f.add(n2);
					if (visu)
						a.setColor(cblue);
					}
				}
			}
		f.remove(n);
		n.setColor(cblue);
	}
	

	/** parcours en profondeur 
	 * @param boolean visu
	 */
	public void parcoursProfondeur(boolean visu) {
		// couleur noire (inexplorée) pour tous les noeuds
		for (Iterator<Node> i = s.iterator(); i.hasNext();) {
			Node n = i.next();
			n.setColor(cblack);
		}
		// parcours à partir d'une source inexplorée
		for (Iterator<Node> i = this.s.iterator(); i.hasNext();) {
			Node n = i.next();
			if (n.color().equals("black"))
				parcoursProfondeur(n, visu);
		}
		// remettre les sommets en noir
			 
	}

	/** parcours en profondeur récursif à partir d'une source 
	 * @param Node d
	 * @param boolean visu
	 */
	private void parcoursProfondeur(Node s, boolean visu) {
		s.setColor(cred);
		for (Iterator<Arc> i = s.succ().iterator(); i.hasNext();) {
			Arc a = i.next();
			
			Node n = a.to();
			if (!n.color().equals(cred)) {
				if (visu)
					a.setColor(cgreen);
				parcoursProfondeur(n, visu);
			}
		}
	}

	/**********************************************************/
	/** méthode statique de génération d'un graphe aléatoire 
	 * @param int nb
	 **/
	public static Graphe randomGraphe(int nb) {
		Graphe g = new Graphe();
		// ensemble S de Node
		int i = nb;
		while (i > 0) {
			int id = 10 * nb * ran.nextInt();
			if (g.addNode(new Node(id)))
				i--;
		}
		// ensemble A d'Arcs
		for (Iterator<Node> it = g.getS().iterator(); it.hasNext();) {
			Node n1 = it.next();
			for (Iterator<Node> j = g.getS().iterator(); j.hasNext();) {
				Node n2 = j.next();
				int choice = 10 * ran.nextInt();
				/*
				 * choice compris entre 0 et 10. si choice < 5: on n'ajoute pas
				 * l'arc (n1,n2) si choice > 5: on ajoute l'arc
				 */
				if (choice > 5 && n1 != n2)
					g.addArc(new Arc(n1, n2));
			}
		}
		return g;
	}
	
	

	/** méthode statique de génération d'un DAG aléatoire 
	 * @param int nb
	 **/
	public static Graphe randomDAG(int nb) {
		Graphe g = new Graphe();
		// ensemble S de Node
		int i = nb;
		while (i > 0) {
			int id = 10 * nb * ran.nextInt();
			if (g.addNode(new Node(id, "n" + id)))
				i--;
		}
		// ensemble A d'Arcs
		for (Iterator<Node> it = g.getS().iterator(); it.hasNext();) {
			Node n1 = it.next();
			randomDAGUtils(g, n1);
		}
		return g;
	}

	private static void randomDAGUtils(Graphe g, Node n1) {
		for (Iterator<Node> j = g.getS().iterator(); j.hasNext();) {
			Node n2 = j.next();
			if (n2.id() > n1.id()) {
				int choice = 10 * ran.nextInt();
				if (choice > 5){
					Arc a = new Arc(n1, n2);
					int il = a.from().id();
					int jl = a.to().id();
			
					if (g.containsNode(il) && g.containsNode(jl) && !g.containsArc(il, jl)) {
						a.from().addSucc(a);
						a.to().addPred(a);
					}
				
				}
			}
		}
	}

	/************************/
	/** calcul des sources 
	 * @param boolean visu
	 **/
	public SortedSet<Node> sources(boolean visu) {
		SortedSet<Node> sources = new TreeSet<>();
		for (Iterator<Node> i = s.iterator(); i.hasNext();) {
			Node n = i.next();
			if (n.pred().isEmpty()) {
				sources.add(n);
				if (visu)
					n.setShape("box");
			}
		}
		return sources;
	}

	/** calcul d'un tri topologique 
	 * @param boolean visu
	 **/
	public SortedSet<Node> triTopologique(boolean visu) {
		SortedSet<Node> sources = this.sources(visu);
		SortedSet<Node> choisis = new TreeSet<>();
		while (sources.isEmpty()) {
			// choix d'un Node dans sources
			int nb = ( ran.nextInt() * sources.size());
			if (nb == 0)
				nb++;
			Node nx = null;
			for (Iterator<Node> i = sources.iterator(); i.hasNext();) {
				if (nb == 1)
					nx = i.next();
				else
					i.next();
				nb--;
			}
			if (nx == null) {
				break;
			}
			sources.remove(nx);
			choisis.add(nx);
			
			triTopologiqueUtils(visu, sources, choisis, nx);
		}
		return choisis;
	}

	private void triTopologiqueUtils(boolean visu, SortedSet<Node> sources, SortedSet<Node> choisis, Node nx) {
		// maj des sources par parcours des succ de x
		for (Iterator<Arc> i = nx.succ().iterator(); i.hasNext();) {
			Arc ax = i.next();
			Node ny = ax.to();
			boolean ajouty = true;
			for (Iterator<Arc> j = ny.pred().iterator(); j.hasNext();) {
				Arc ay = j.next();
				Node nz = ay.from();
				
				if (!choisis.contains(nz))
					ajouty = false;
			}
			if (ajouty) {
				sources.add(ny);
				if (visu)
					ax.setColor("red");
			}
		}
	}

	/** test de l'existence d'un cycle 
	 * @param boolean visu
	 */
	public boolean cycles(boolean visu) {
		SortedSet<Node> t = this.triTopologique(false);
		if (t.size() != this.nbNodes()) {
			if (visu) {
				for (Iterator<Node> i = this.getS().iterator(); i.hasNext();) {
					Node n = 	i.next();
					if (!t.contains(n))
						n.setColor("blue");
				}
			}
			return true;
		} else
			return false;
	}
}// fin de Graph
