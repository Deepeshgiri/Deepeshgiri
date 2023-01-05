import java.util.Scanner;
import java.lang.Math;

public class PQ6 {
    //⦁	Write a program to compute x power y, using power(x,y) from the math library.
    public static void main(String args []){
        int x,y;
        double sum=0;
        Scanner sc = new Scanner(System.in);
        x= sc.nextInt();
        y= sc.nextInt();
        sum= Math.pow(x,y);
        System.out.println(sum);
    }
}
