import java.util.Scanner;

public class PQ2 {
    //⦁	Given the number n that denotes the number of terms in the following expression,
    // write a program to compute the final sum. 1! + 2! + 3! + 4! + 5! + ... + n!
    public static void main(String args []){
        int n,j,i,sum=0,fact=1;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        for (i=1;i<=n;i++){
           fact=fact*i;
           sum= sum+fact;
        }System.out.println(sum);

    }
}
