import java.util.Scanner;

public class PQ5 {
    //Write a program to read a string and find the sum of all the digits in the
    // given string consisting of at most 100 digits. Read the input as a string.
    public static void main(String args []){
        int sum = 0;
        Scanner sc = new Scanner(System.in);
        String a=sc.next();
        char [] b=a.toCharArray();
        for (int i=0;i<b.length;i++){
            int d= (int)b[i];
            sum = sum +d;
            System.out.print(d+"+");
        }
        System.out.println("="+sum);

    }
}
