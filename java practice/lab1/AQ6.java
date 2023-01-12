import java.util.Scanner;

public class AQ6 {
    // Write a program to find the factorial of n.
    public static void main(String args[]){
        int n, fact=1;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        for (int i = 1; i<=n; i++){
            fact= fact*i;

        }System.out.println(fact);

    }
}
