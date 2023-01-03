import java.util.Scanner;

public class PQ7 {
    //Given a positive integer n, write a program to reverse the digits of n and print the final result from a single variable.
    public static void main(String args []){
        int a,n,rev=0;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        while(n!=0){
            a=n%10;
            n=n/10;
            rev= (rev*10)+a;
        }
        System.out.println(rev);
    }
}
