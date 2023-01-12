import java.util.Scanner;

public class AQ1 {
    public static void main(String args[]){
        //. [elseif ladder] Given a number n, write a program to find whether n is zero, positive
        //or negative and print accordingly.
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the value of N");
        n = sc.nextInt();
        if (n<0){
            System.out.println("negative number");
        } else if (n==0) {
            System.out.println("zero");
        }else{
            System.out.println("positive");
        }
    }
}
