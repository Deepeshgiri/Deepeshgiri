import java.util.Scanner;

public class PQ1 {
    //Write a program to print all natural numbers from 1 to n using the for loop.
    public static void main(String args []){
        int n,i;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        for(i=1;i<=n;i++){
            System.out.println(i);
        }
    }
}
