import java.util.Scanner;

public class PQ2 {
    //Write a program to print all natural numbers from n to 1 using the for loop.
    public static void main(String args []){
        int i,n;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        for (i=n;i>=1;i--){
            System.out.println(i);
        }

    }
}
