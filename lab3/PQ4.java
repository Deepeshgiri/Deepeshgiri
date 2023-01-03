import java.util.Scanner;

public class PQ4 {
    //Given a positive integer n, write a program to print all the digits of n individually.
    public static void main(String args []){
        int a,i=0,n;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        while(n!=0){
            a=n%10;
           // System.out.println(a);
            n=n/10;
            i=(i*10)+a;
        }while(i!=0){
            a=i%10;
            System.out.println(a);
            i=i/10;
        }
    }
}
