import java.sql.SQLOutput;
import java.util.Scanner;

public class AQ3 {
    //Write a program to read n numbers and print their sum. Use a loop to read n numbers.
    public static void main(String args[]){
        int i,n,a,sum=0;

        Scanner sc =new Scanner(System.in);
        System.out.println("enter total number of input ");
        n= sc.nextInt();
        for(i=1;i<=n;i++){
            System.out.println("enter the value");
            a= sc.nextInt();
            sum=sum+a;
        }
        System.out.println(sum);
    }
}
