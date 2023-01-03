import java.util.Scanner;

public class AQ2 {
    // [nested if else] Write a program to find the smallest element among the given three
    //elements
    public static void main(String args []){
        int x,y,z;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the value of X,Y,Z followed by Enter");
        x= sc.nextInt();
        y= sc.nextInt();
        z= sc.nextInt();

        if(x>y){
            if(y>z){
                System.out.println("smallest number is Z"+z);
            }else System.out.println("smallest number is y"+y);
        }
        if(y>x){
            if(x>z){
                System.out.println("smallest number is Z"+z);
            }else System.out.println("smallest number is X"+x);
        }
    }
}
