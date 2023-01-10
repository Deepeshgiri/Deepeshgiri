import java.util.Scanner;

public class PQ7 {
    //Given a paragraph S,
    // write a program to remove the spaces and new-line character in S and print the final result.
    public static void main(String args []){
        Scanner sc = new Scanner(System.in);
        String a= sc.nextLine();
        char []d = a.toCharArray();
        StringBuffer n= new StringBuffer();
       // System.out.println(f);
        for (int i=0; i<a.length();i++){
            if(d[i]!=' '){
                n.append(d[i]);

            }
        }String fin=n.toString();
        System.out.println(fin);
    }

}
