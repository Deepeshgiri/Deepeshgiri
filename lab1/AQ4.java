import java.util.Scanner;

public class AQ4 {
    //repeatRange loop] Given a number n, write a program print all the numbers
    //between x and y that are divisible with 7.

    // AQ 5; [repeatIf] Given two positive integers and y, write a program to count the number of
    //integers between x and y that are divisible by 7 or 8.
    public static void main(String args[]){
        int x,y,z,temp;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the range X and y followed by Enter");
        x= sc.nextInt();
        y= sc.nextInt();
        if(x>y){
            temp=y;
            y=x;
            x=temp;
        }
        System.out.println("X is "+x+ " and  Y is " +y);
        for(int i=x; i<=y; i++){
            if(i%7==0){
                System.out.println("div by 7 "+i);
            }if(i%8==0){
                System.out.println("div by 8 "+i);
            }
        }
    }
}
