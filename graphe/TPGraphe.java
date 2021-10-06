package graphe;

import java.io.*;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class TPGraphe {
    private static final Logger LOGGER = Logger.getLogger(TPGraphe.class.getName());

    public static void main (String[] args) throws IOException {
    	
        // graphe des diviseurs
        Graphe g1 = Graphe.randomDAG(10);
        LOGGER.log(Level.SEVERE, "{0}", g1);
        Graphe.toDot(g1,"prof.dot");
        g1.parcoursProfondeur(true);
        Graphe.toDot(g1,"profDiv.dot");
        g1.setColor("black");
        SortedSet<Node> l = g1.triTopologique(true);
        LOGGER.log(Level.SEVERE, "{0}", l);
        Graphe.toDot(g1,"profDiv.dot");
    }
}