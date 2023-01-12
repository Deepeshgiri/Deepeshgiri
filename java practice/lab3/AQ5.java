import java.util.Scanner;

public class AQ5 {
    //Given two positive integers n and k, write a program to reverse the last k digits  of n
    // and print the final result consisting of k digits,
    // where k is at most the number of digits in n.
    public static void main(String args []){
        int n,k,rev=0,rem=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the value of n");
        n= sc.nextInt();
        System.out.println("enter the value of k");
        k=sc.nextInt();
        for(int i=1;i<=k;i++){
            rem = n%10;
            rev=(rev*10)+rem;
            n=n/10;
        }
        System.out.println("reverse number till k of n is "+rev);
    }
}
