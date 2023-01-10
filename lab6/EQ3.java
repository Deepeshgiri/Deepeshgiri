import java.util.Arrays;
import java.util.Scanner;

public class EQ3 {
    //Given two strings S1 and S2, write a program to find whether S2 is an anagram of S1 or not,
    // and print “yes” or “no” accordingly.

    public static void main(String args []){
        int count=0;
        Scanner sc = new Scanner(System.in);
        String a= sc.next();
        String b=sc.next();
        char []c=a.toLowerCase().toCharArray();
        char []d=b.toLowerCase().toCharArray();
        if(c.length==d.length){
            Arrays.sort(c);
            Arrays.sort(d);
            if(Arrays.equals(c,d)){
                System.out.println("yes");
            }
        }else System.out.println("no");

    }
}
