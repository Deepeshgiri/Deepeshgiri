import java.util.Scanner;

public class PQ5 {
    //Given a positive integer n, write a program to compute the sum of all the digits of n.
    public static void main(String args []){
        int r,n,sum=0;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        while(n!=0){
            r=n%10;
            sum=sum+r;
            n=n/10;
        }
        System.out.println(sum);
    }
}
