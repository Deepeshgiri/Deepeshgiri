import java.util.Scanner;

public class EQ1 {
    //. Given two positive numbers x and y, write a program to find the minimum number
    //between x and y, without using <,<=,>, >=, and ternary operators.
    public static void main(String args []){
        int x, y;

        Scanner sc = new Scanner(System.in);
        x= sc.nextInt();
        y= sc.nextInt();
        for(int i =1; ;i++){
            y=y-1;
            x=x-1;
            if (x==0){
                System.out.println("x is smaller");
                break;
            }
            if(y==0){
                System.out.println("y is smaller");
                break;
            }
        }

    }
}
