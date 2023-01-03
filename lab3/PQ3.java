import java.util.Scanner;

public class PQ3 {
    //Write a program to print all odd numbers from 1 to n using the for loop.
    public static void main(String args []){
        int i,n;
        Scanner sc = new Scanner(System.in);
        n=sc.nextInt();
        for (i=1;i<=n;i++){
            if (i%2==0){
                i++;}
            System.out.println(i);
            }
        }
    }

