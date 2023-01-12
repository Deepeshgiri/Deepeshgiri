import java.util.Scanner;

public class EQ3 {
// Given a positive integer n, write a program to reverse all the digits n.
    public static void main (String args []){
        int a,n,rev=0,r;
        Scanner sc = new Scanner(System.in);
        System.out.println("please eter the number you want to reverse ");
        n= sc.nextInt();

        while(n!=0){
            r=n%10;
            System.out.println(r);
            rev=(rev*10)+r;
            n=n/10;

        }
        System.out.println(rev);


    }
}
