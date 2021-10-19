/**
 *  Class Node
 * 
 * @autor Nathanaël Bayle
 */
package graphe;

import java.io.*;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TPGraphe {
	/** Utilisation du logger */
    private static final Logger LOGGER = Logger.getLogger(TPGraphe.class.getName());

    public static void main (String[] args) throws IOException {
    	
        // graphe des diviseurs
        Graphe g1 = Graphe.randomDAG(10); 					// Création d'un randomDag
        LOGGER.log(Level.SEVERE, "{0}", g1); 
        Graphe.toDot(g1,"prof.dot");						// On enregistre le radomDAG dans le fichier prof.dot
        g1.parcoursProfondeur(true);						// On effectue un parcours en profondeur
        Graphe.toDot(g1,"profDiv.dot");						// Et on l'enregistre dans le fichier profDiv.dot
        g1.setColor("black");
        SortedSet<Node> l = g1.triTopologique(true);		// On effectue un tri topologique
        LOGGER.log(Level.SEVERE, "{0}", l);
	    Graphe.toDot(g1,"profDiv.dot");						// Et on l'enregistre dans le fichier profDiv.dot
    }
} // Fin de TPGraphe