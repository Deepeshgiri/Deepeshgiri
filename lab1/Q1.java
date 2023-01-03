import java.util.Scanner;

public class Q1 {
    // Write a program to perform the following tasks.
    //1.1.Read the values for three variables x, y and z.
    //1.2. Compute the expression 2*x+3*y+4*z and print the final result.

    public static void main(String args []){
        int a, x,y,z;

        Scanner sc = new Scanner(System.in);
        System.out.println("enter the value of x:");
        x = sc.nextInt();
        System.out.println("enter the value of Y:");
        y= sc.nextInt();
        System.out.println("enter the value of Z:");
        z= sc.nextInt();

        a= (2*x)+(3*y)+(4*z);

        System.out.println(a);
    }
}
