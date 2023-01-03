import java.util.Scanner;

public class PQ6 {
    //Given a positive integer n, write a program to find whether n is a prime number or not.
    public static void main (String args []){
        int n,count=0;
        Scanner sc = new Scanner(System.in);
        n= sc.nextInt();
        if(n==2||n==1){
            System.out.println("not prime");

        }else{
        for(int i=1;i<=n;i++){
            if(n%i==0){
                count++;
            }
        }
        if(count ==2){
            System.out.println(n+" is prime");
        }else{
            System.out.println("number is not prime");
        }
    }}
}
